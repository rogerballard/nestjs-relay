import { typeGlobalID, typeGlobalIDs, GlobalID } from './global-id.type'

describe('GlobalID Helpers', () => {
  describe('typeGlobalID', () => {
    it('should return the GlobalID type', () => {
      expect(typeGlobalID()).toEqual(GlobalID)
    })
  })
  describe('typeGlobalIDs', () => {
    it('should return an array of the GlobalID type', () => {
      expect(typeGlobalIDs()).toEqual([GlobalID])
    })
  })
})
