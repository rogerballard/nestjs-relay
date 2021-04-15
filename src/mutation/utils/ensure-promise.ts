/** Returns true if `maybePromise` is a Promise. */
export const isPromise = <T>(maybePromise: T | Promise<T>): maybePromise is Promise<T> =>
  Boolean(typeof (maybePromise as any)?.then === 'function');

export const ensurePromise = <T>(maybePromise: T | Promise<T>) =>
  isPromise(maybePromise) ? maybePromise : Promise.resolve(maybePromise);
