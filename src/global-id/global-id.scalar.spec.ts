import { Kind } from 'graphql'
import { GlobalIdScalar } from './global-id.scalar'

describe('ID Scalar', () => {
  let scalar: GlobalIdScalar

  beforeEach(() => {
    scalar = new GlobalIdScalar()
  })

  describe('when a valid global id is provided', () => {
    it('should serialize correctly', () => {
      const globalId = { type: 'Object', id: '1' }
      expect(scalar.serialize(globalId)).toBe('T2JqZWN0OjE=')
    })
    it('should parseValue correctly', () => {
      expect(scalar.parseValue('T2JqZWN0OjE=')).toMatchObject({ type: 'Object', id: '1' })
    })
    it('should parseLiteral correctly', () => {
      expect(
        scalar.parseLiteral({
          value: 'T2JqZWN0OjE=',
          kind: Kind.STRING
        })
      ).toMatchObject({ type: 'Object', id: '1' })
    })
  })

  describe('when an parsing an invalid global id', () => {
    describe('when a global id that does not have a colon symbol is provided', () => {
      it('should throw an error from the parseValue method', () => {
        expect(() => scalar.parseValue('T2JqZWN0MQ==')).toThrow('Invalid ID: T2JqZWN0MQ==')
      })
      it('should throw an error from the parseLiteral method', () => {
        expect(() =>
          scalar.parseLiteral({
            value: 'T2JqZWN0MQ==',
            kind: Kind.STRING
          })
        ).toThrow('Invalid ID: T2JqZWN0MQ==')
      })
    })
    describe('when a global id that does not have a type is provided', () => {
      it('should throw an error from the parseValue method', () => {
        expect(() => scalar.parseValue('OjE=')).toThrow('Invalid ID: OjE=')
      })
      it('should throw an error from the parseLiteral method', () => {
        expect(() =>
          scalar.parseLiteral({
            value: 'OjE=',
            kind: Kind.STRING
          })
        ).toThrow('Invalid ID: OjE=')
      })
    })
    describe('when a global id that does not have an id is provided', () => {
      it('should throw an error from the parseValue method', () => {
        expect(() => scalar.parseValue('T2JqZWN0Og==')).toThrow('Invalid ID: T2JqZWN0Og==')
      })
      it('should throw an error from the parseLiteral method', () => {
        expect(() =>
          scalar.parseLiteral({
            value: 'T2JqZWN0Og==',
            kind: Kind.STRING
          })
        ).toThrow('Invalid ID: T2JqZWN0Og==')
      })
    })
    describe('when a non-string value is provided', () => {
      it('should throw an error from the parseLiteral method', () => {
        expect(() =>
          scalar.parseLiteral({
            value: 'T2JqZWN0Og==',
            kind: Kind.INT
          })
        ).toThrow('Invalid ID type: IntValue')
      })
    })
  })
})
