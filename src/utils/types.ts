export interface ConstructorType {
  new (...args: any[]): {}
}

export interface InstanceType {
  constructor: Function
}

export type AbstractConstructorType = Function & { prototype: any }

export type ParameterConstructorType = AbstractConstructorType | ConstructorType
