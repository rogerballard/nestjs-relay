import { capitalise, getClientMutationId } from './utils';

describe('mutation utils', () => {
  describe('capitalise', () => {
    it('should capitalise a the first character of a string', () => {
      expect(capitalise('a')).toBe('A');
    });
  });

  describe('getClientMutationId', () => {
    describe('when multiple args are provided', () => {
      describe('when one of the args has the `clientMutationId` property', () => {
        it('should return the index of the arg', () => {
          const args = [{}, 1, [], 'string', new Date(), { clientMutationId: 'abcde' }];
          expect(getClientMutationId(args)).toBe('abcde');
        });
      });
    });

    describe('when args is an empty array', () => {
      it('should return null', () => {
        expect(getClientMutationId([])).toBe(null);
      });
    });
  });
});
