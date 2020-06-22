module.exports = {
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 95,
      lines: 95,
      statements: 95
    }
  },
  moduleFileExtensions: ['ts', 'js'],
  roots: ['src', 'test'],
  testEnvironment: 'node',
  testRegex: '(.spec|.e2e-spec).ts$',
  transform: { '.ts': 'ts-jest' }
}
