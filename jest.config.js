/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  reporters: [
    "default",
    [
      "jest-junit",
      { outputDirectory: "tests/reports", suiteName: "jest tests" },
    ],
  ],
};
