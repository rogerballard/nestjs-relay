export type AnyConstructor<T = Record<string, unknown>> = new (...args: any[]) => T;

export type AnyFunction<A = any> = (...input: any[]) => A;

export type Mixin<T extends AnyFunction> = InstanceType<ReturnType<T>>;
