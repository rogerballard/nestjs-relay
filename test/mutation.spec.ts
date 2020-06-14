import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { StarWarsModule } from './starwars-app';
import { IntroduceShipInput } from './starwars-app/introduce-ship.input';

describe('Mutation', () => {
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

  describe('introduceShip', () => {
    it('should introduce a new ship to the dataset', async () => {
      const query = `
        mutation IntroduceShipMutation($input: IntroduceShipInput!) {
          introduceShip(input: $input) {
            ship {
              id
              name
            }
            faction {
              name
            }
            clientMutationId
          }
        }
      `;

      const variables = {
        input: {
          shipName: 'B-Wing',
          factionId: 'RmFjdGlvbjox',
          clientMutationId: 'abcde',
        },
      };

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({ query, variables });

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        data: {
          introduceShip: {
            ship: {
              id: 'U2hpcDo5',
              name: 'B-Wing',
            },
            faction: {
              name: 'Alliance to Restore the Republic',
            },
            clientMutationId: 'abcde',
          },
        },
      });
    });
  });
});
