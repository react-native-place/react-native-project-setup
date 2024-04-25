module.exports = {
  preset: 'react-native',
  verbose: true,
  setupFiles: ['./__mock__/jestSetupFile.js'],
  transform: {
    '\\.js$': ['babel-jest', {configFile: './babel.config.testing.js'}],
  },
};
