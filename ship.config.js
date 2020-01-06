// eslint-disable-next-line functional/immutable-data, import/no-commonjs
module.exports = {
  publishCommand: ({ defaultCommand }) => `${defaultCommand} --verbose --access public`,
  mergeStrategy: {
    toSameBranch: ['master'],
  },
  testCommandBeforeRelease: () => `yarn test:lint test:locally test:types test:unit`,
};
