import * as NestGraphQL from '@nestjs/graphql';
import { GlobalIdField } from './global-id.field';

describe('GlobalIdField', () => {
  const spy = jest.spyOn(NestGraphQL, 'ResolveField');

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should set the default options', () => {
    GlobalIdField();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(expect.any(Function), { name: 'id', nullable: false });
  });

  describe('when the complexity option is provided', () => {
    it('should pass it to the field resolver', () => {
      GlobalIdField({ complexity: 1 });

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(expect.any(Function), {
        name: 'id',
        nullable: false,
        complexity: 1,
      });
    });
  });
});
