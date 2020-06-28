import { Int } from '@nestjs/graphql';
import { returnsInt } from './scalar.utils';

describe('Scalar Utils', () => {
  describe('returnsInt', () => {
    it('should return the Int type', () => {
      expect(returnsInt()).toEqual(Int);
    });
  });
});
