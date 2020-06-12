import { getPayloadName } from './helpers'

describe('Mutation Helpers', () => {
  describe('getPayloadName', () => {
    it('should return a capitalised string with a suffix of `Payload`', () => {
      const mutationName = 'doSomething'

      const result = getPayloadName(mutationName)

      expect(result).toBe('DoSomethingPayload')
    })
  })
})
