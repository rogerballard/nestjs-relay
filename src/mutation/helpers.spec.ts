import { getPayloadName, getInputName } from './helpers'

describe('Mutation Helpers', () => {
  describe('getInputName', () => {
    it('should returna capitalised string with a suffix of `Input`', () => {
      const mutationName = 'doSomething'

      const result = getInputName(mutationName)

      expect(result).toBe('DoSomethingInput')
    })
  })

  describe('getPayloadName', () => {
    it('should return a capitalised string with a suffix of `Payload`', () => {
      const mutationName = 'doSomething'

      const result = getPayloadName(mutationName)

      expect(result).toBe('DoSomethingPayload')
    })
  })
})
