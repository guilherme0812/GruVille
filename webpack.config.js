const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  config.resolve.alias = {
    ...config.resolve.alias,
    "react-native-web": "react-native-web-maps"
  }
  // Customize the config before returning it.
  return config;
};
