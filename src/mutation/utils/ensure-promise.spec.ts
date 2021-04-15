import { ensurePromise, isPromise } from './ensure-promise';

describe('isPromise', () => {
  it('should return true for a Promise', () => {
    expect(isPromise(Promise.resolve())).toBe(true);
  });

  it('should return false for everything else', () => {
    expect(isPromise('not a Promise')).toBe(false);
    expect(isPromise({ then: 'not a function' })).toBe(false);
  });
});

describe('ensurePromise', () => {
  it('should return the passed Promise', () => {
    const promise = Promise.resolve();
    expect(ensurePromise(promise)).toBe(promise);
  });

  it('should return everything else wrapped in a promise', () => {
    expect(isPromise(ensurePromise('not a Promise'))).toBe(true);
  });
});
