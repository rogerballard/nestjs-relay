import { Test } from '@nestjs/testing'
import { INestApplication } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import * as request from 'supertest'
import { StarWarsModule } from './starwars-app'

describe('Object Identification', () => {
  let app: INestApplication

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [StarWarsModule]
    }).compile()

    app = module.createNestApplication()
    await app.init()
  })

  afterAll(async () => {
    await app.close()
  })

  describe('empire query', () => {
    const query = `
      query EmpireQuery {
        empire {
          id
          name
        }
      }
    `

    it('should fetch the ID and name of the empire faction', () => {
      return request(app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .expect({
          data: {
            empire: {
              id: 'RmFjdGlvbjoy',
              name: 'Galactic Empire'
            }
          }
        })
    })
  })
  describe('rebels query', () => {
    const query = `
      query RebelsQuery {
        rebels {
          id
          name
        }
      }
    `

    it('should fetch the ID and name of the rebels faction', () => {
      return request(app.getHttpServer())
        .post('/graphql')
        .send({ query })
        .expect(200)
        .expect({
          data: {
            rebels: {
              id: 'RmFjdGlvbjox',
              name: 'Alliance to Restore the Republic'
            }
          }
        })
    })
  })
})
