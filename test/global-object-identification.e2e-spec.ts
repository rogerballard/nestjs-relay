import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { StarWarsModule } from './starwars-app';

describe('Global Object Identification', () => {
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

  describe('empire query', () => {
    it('should fetch the empire faction', async () => {
      const query = `
        query EmpireQuery {
          empire {
            id
            name
          }
        }
      `;

      const response = await request(app.getHttpServer()).post('/graphql').send({ query });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        data: {
          empire: {
            id: 'RmFjdGlvbjoy',
            name: 'Galactic Empire',
          },
        },
      });
    });
    it('should refetch the empire faction', async () => {
      const query = `
        query EmpireRefetchQuery {
          node(id: "RmFjdGlvbjoy") {
            id
            ... on Faction {
              name
            }
          }
        }
      `;

      const response = await request(app.getHttpServer()).post('/graphql').send({ query });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        data: {
          node: {
            id: 'RmFjdGlvbjoy',
            name: 'Galactic Empire',
          },
        },
      });
    });
  });

  describe('rebels query', () => {
    it('should fetch the rebels faction', async () => {
      const query = `
        query RebelsQuery {
          rebels {
            id
            name
          }
        }
      `;

      const response = await request(app.getHttpServer()).post('/graphql').send({ query });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        data: {
          rebels: {
            id: 'RmFjdGlvbjox',
            name: 'Alliance to Restore the Republic',
          },
        },
      });
    });
    it('should refetch the rebels faction', async () => {
      const query = `
        query RebelsRefetchQuery {
          node(id: "RmFjdGlvbjox") {
            id
            ... on Faction {
              name
            }
          }
        }
      `;

      const response = await request(app.getHttpServer()).post('/graphql').send({ query });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        data: {
          node: {
            id: 'RmFjdGlvbjox',
            name: 'Alliance to Restore the Republic',
          },
        },
      });
    });
  });

  describe('x-wing query', () => {
    it('should refetch the x-wing ship', async () => {
      const query = `
        query XWingRefetchQuery {
          node(id: "U2hpcDox") {
            id
            ... on Ship {
              name
            }
          }
        }
      `;

      const response = await request(app.getHttpServer()).post('/graphql').send({ query });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        data: {
          node: {
            id: 'U2hpcDox',
            name: 'X-Wing',
          },
        },
      });
    });
  });

  describe('ships query', () => {
    it('should refetch multiple ships', async () => {
      const query = `
        query ShipsRefetchQuery {
          nodes(ids: ["U2hpcDox", "U2hpcDo3", "U2hpcDo0"]) {
            id
            ... on Ship {
              name
            }
          }
        }
      `;

      const response = await request(app.getHttpServer()).post('/graphql').send({ query });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        data: {
          nodes: [
            { id: 'U2hpcDox', name: 'X-Wing' },
            { id: 'U2hpcDo3', name: 'TIE Interceptor' },
            { id: 'U2hpcDo0', name: 'Millenium Falcon' },
          ],
        },
      });
    });
  });

  describe('ships and factions query', () => {
    it('should refetch multiple ships and factions', async () => {
      const query = `
        query ShipsAndFactionsRefetchQuery {
          nodes(ids: ["U2hpcDo1", "RmFjdGlvbjox", "U2hpcDoz", "RmFjdGlvbjoy"]) {
            id
            ... on Ship {
              name
            }
            ... on Faction {
              name
            }
          }
        }
      `;

      const response = await request(app.getHttpServer()).post('/graphql').send({ query });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        data: {
          nodes: [
            { id: 'U2hpcDo1', name: 'Home One' },
            { id: 'RmFjdGlvbjox', name: 'Alliance to Restore the Republic' },
            { id: 'U2hpcDoz', name: 'A-Wing' },
            { id: 'RmFjdGlvbjoy', name: 'Galactic Empire' },
          ],
        },
      });
    });
  });
});
