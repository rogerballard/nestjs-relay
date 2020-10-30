import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { StarWarsModule } from './starwars-app';

describe('Connection', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [StarWarsModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should fetch the first rebels ship', async () => {
    const query = `
      query RebelsShipsQuery {
        rebels {
          name,
          ships(first: 1) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    `;

    const response = await request(app.getHttpServer()).post('/graphql').send({ query });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: {
        rebels: {
          name: 'Alliance to Restore the Republic',
          ships: {
            edges: [
              {
                node: { name: 'X-Wing' },
              },
            ],
          },
        },
      },
    });
  });

  it('should fetch the first two rebels ships with cursors', async () => {
    const query = `
      query MoreRebelShipsQuery {
        rebels {
          name,
          ships(first: 2) {
            edges {
              cursor,
              node {
                name
              }
            }
          }
        }
      }
    `;

    const response = await request(app.getHttpServer()).post('/graphql').send({ query });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: {
        rebels: {
          name: 'Alliance to Restore the Republic',
          ships: {
            edges: [
              {
                cursor: 'YXJyYXljb25uZWN0aW9uOjA=',
                node: { name: 'X-Wing' },
              },
              {
                cursor: 'YXJyYXljb25uZWN0aW9uOjE=',
                node: { name: 'Y-Wing' },
              },
            ],
          },
        },
      },
    });
  });

  it('should fetch the next three rebels ships after a cursor', async () => {
    const query = `
      query EndOfRebelShipsQuery {
        rebels {
          name,
          ships(first: 3 after: "YXJyYXljb25uZWN0aW9uOjE=") {
            edges {
              cursor,
              node {
                name
              }
            }
          }
        }
      }
    `;

    const response = await request(app.getHttpServer()).post('/graphql').send({ query });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: {
        rebels: {
          name: 'Alliance to Restore the Republic',
          ships: {
            edges: [
              {
                cursor: 'YXJyYXljb25uZWN0aW9uOjI=',
                node: { name: 'A-Wing' },
              },
              {
                cursor: 'YXJyYXljb25uZWN0aW9uOjM=',
                node: { name: 'Millenium Falcon' },
              },
              {
                cursor: 'YXJyYXljb25uZWN0aW9uOjQ=',
                node: { name: 'Home One' },
              },
            ],
          },
        },
      },
    });
  });

  it('should not fetch any rebel ships at the end of the connection', async () => {
    const query = `
      query RebelsQuery {
        rebels {
          name,
          ships(first: 3 after: "YXJyYXljb25uZWN0aW9uOjQ=") {
            edges {
              cursor,
              node {
                name
              }
            }
          }
        }
      }
    `;

    const response = await request(app.getHttpServer()).post('/graphql').send({ query });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: {
        rebels: {
          name: 'Alliance to Restore the Republic',
          ships: {
            edges: [],
          },
        },
      },
    });
  });

  it('should fetch the empire & alliance for the top-level factions connection', async () => {
    expect.assertions(2);

    const query = `
    query FactionsConnectionQuery {
      factions(first: 2) {
        edges {
          node {
            name
            ships(first: 3) {
              edges {
                node {
                  name
                }
              }
            }
          }
        }
      }
    }
  `;

    const response = await request(app.getHttpServer()).post('/graphql').send({ query });

    console.log(JSON.stringify(response.body, null, 2));

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: {
        factions: {
          edges: [
            {
              node: {
                name: 'Alliance to Restore the Republic',
                ships: {
                  edges: [
                    {
                      node: {
                        name: 'X-Wing',
                      },
                    },
                    {
                      node: {
                        name: 'Y-Wing',
                      },
                    },
                    {
                      node: {
                        name: 'A-Wing',
                      },
                    },
                  ],
                },
              },
            },
            {
              node: {
                name: 'Galactic Empire',
                ships: {
                  edges: [
                    {
                      node: {
                        name: 'TIE Fighter',
                      },
                    },
                    {
                      node: {
                        name: 'TIE Interceptor',
                      },
                    },
                    {
                      node: {
                        name: 'Executor',
                      },
                    },
                  ],
                },
              },
            },
          ],
        },
      },
    });
  });

  it('should identify the end of the rebels ships connection', async () => {
    const query = `
      query EndOfRebelShipsQuery {
        rebels {
          name,
          originalShips: ships(first: 2) {
            edges {
              node {
                name
              }
            }
            pageInfo {
              hasNextPage
            }
          }
          moreShips: ships(first: 3 after: "YXJyYXljb25uZWN0aW9uOjE=") {
            edges {
              node {
                name
              }
            }
            pageInfo {
              hasNextPage
            }
          }
        }
      }
    `;

    const response = await request(app.getHttpServer()).post('/graphql').send({ query });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      data: {
        rebels: {
          name: 'Alliance to Restore the Republic',
          originalShips: {
            edges: [
              {
                node: { name: 'X-Wing' },
              },
              {
                node: { name: 'Y-Wing' },
              },
            ],
            pageInfo: { hasNextPage: true },
          },
          moreShips: {
            edges: [
              {
                node: { name: 'A-Wing' },
              },
              {
                node: { name: 'Millenium Falcon' },
              },
              {
                node: { name: 'Home One' },
              },
            ],
            pageInfo: { hasNextPage: false },
          },
        },
      },
    });
  });
});
