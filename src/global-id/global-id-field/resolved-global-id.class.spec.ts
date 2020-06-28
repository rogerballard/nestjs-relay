import {
  ResolvedGlobalId,
  typeResolvedGlobalId,
  typeResolvedGlobalIds,
} from './resolved-global-id.class';

describe('ResolvedGlobalId', () => {
  describe('Helpers', () => {
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
});
