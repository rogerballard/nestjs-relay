import { capitalise } from './capitalise.util';

describe('capitalise', () => {
  it('should capitalise a the first character of a string', () => {
    expect(capitalise('a')).toBe('A');
  });
});
