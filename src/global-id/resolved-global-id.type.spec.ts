import {
  ResolvedGlobalId,
  typeResolvedGlobalId,
  typeResolvedGlobalIds,
} from './resolved-global-id.type';

describe('GlobalID Helpers', () => {
  describe('typeResolvedGlobalId', () => {
    it('should return the ResolvedGlobalId type', () => {
      expect(typeResolvedGlobalId()).toEqual(ResolvedGlobalId);
    });
  });
  describe('typeResolvedGlobalIds', () => {
    it('should return an array of the ResolvedGlobalId type', () => {
      expect(typeResolvedGlobalIds()).toEqual([ResolvedGlobalId]);
    });
  });
});
