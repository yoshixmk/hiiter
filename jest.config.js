/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  'roots': [
    '<rootDir>/src'
  ],
  preset: 'ts-jest',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/src/spec/tsconfig.json'
    }
  }
};