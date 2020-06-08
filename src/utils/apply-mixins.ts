export function applyMixins(derivedConstructor: any, baseConstructors: any[]) {
  baseConstructors.forEach(baseConstructor => {
    Object.getOwnPropertyNames(baseConstructor.prototype).forEach(name => {
      Object.defineProperty(
        derivedConstructor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseConstructor.prototype, name) as PropertyDescriptor
      )
    })
  })
}

export type AnyFunction<A = any> = (...input: any[]) => A

export type Mixin<T extends AnyFunction> = InstanceType<ReturnType<T>>
