const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    alias: {
      '@app': `${__dirname}/src/app`,
      '@features': `${__dirname}/src/features`,
      '@components': `${__dirname}/src/components`,
      '@hooks': `${__dirname}/src/hooks`,
      '@store': `${__dirname}/src/store`,
      '@services': `${__dirname}/src/services`,
      '@utils': `${__dirname}/src/utils`,
      '@constants': `${__dirname}/src/constants`,
      '@theme': `${__dirname}/src/theme`,
      '@types': `${__dirname}/src/types`,
      '@i18n': `${__dirname}/src/i18n`,
      '@config': `${__dirname}/src/config`,
      '@assets': `${__dirname}/src/assets`,
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
