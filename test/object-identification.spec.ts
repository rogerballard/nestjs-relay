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

  describe('empire field', () => {
    it('should fetch the ID and name of the empire faction', async () => {
      const query = `
        query EmpireQuery {
          empire {
            id
            name
          }
        }
      `

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({ query })

      expect(response.status).toBe(200)
      expect(response.body).toEqual({
        data: {
          empire: {
            id: 'RmFjdGlvbjoy',
            name: 'Galactic Empire'
          }
        }
      })
    })
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
      `

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({ query })

      expect(response.status).toBe(200)
      expect(response.body).toEqual({
        data: {
          node: {
            id: 'RmFjdGlvbjoy',
            name: 'Galactic Empire'
          }
        }
      })
    })
  })
  describe('rebels field', () => {
    it('should fetch the ID and name of the rebels faction', async () => {
      const query = `
        query RebelsQuery {
          rebels {
            id
            name
          }
        }
      `

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({ query })

      expect(response.status).toBe(200)
      expect(response.body).toEqual({
        data: {
          rebels: {
            id: 'RmFjdGlvbjox',
            name: 'Alliance to Restore the Republic'
          }
        }
      })
    })
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
      `

      const response = await request(app.getHttpServer())
        .post('/graphql')
        .send({ query })

      expect(response.status).toBe(200)
      expect(response.body).toEqual({
        data: {
          node: {
            id: 'RmFjdGlvbjox',
            name: 'Alliance to Restore the Republic'
          }
        }
      })
    })
  })
})
