module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/__test__/(*.)+(spec|test).+(ts|js)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
}
