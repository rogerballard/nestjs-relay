import { applyMixins } from './apply-mixins'

class Animal {
  species: string
  id: number = 0
  constructor(species: string) {
    this.species = species
  }
  eat() {}
}

class Person {
  name: string
  id: number = 0
  constructor(name: string) {
    this.name = name
  }
  speak() {}
}

interface Employee extends Person, Animal {
  employeeCode: string
}

class Employee {}

describe('applyMixins', () => {
  it('should merge the Animal and Person classes into the Employee class', () => {
    applyMixins(Employee, [Animal, Person])
    expect(Employee.prototype.eat).toBeDefined()
    expect(Employee.prototype.speak).toBeDefined()

    const instance = new Employee()
    instance.id = 1
    instance.species = 'human'
    instance.name = 'bob'

    expect(instance.id).toBe(1)
    expect(instance.species).toBe('human')
    expect(instance.name).toBe('bob')
  })
})
