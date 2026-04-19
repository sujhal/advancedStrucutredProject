module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.ios.ts', '.android.ts', '.ts', '.ios.tsx', '.android.tsx', '.tsx', '.json'],
        alias: {
          '@app': './src/app',
          '@features': './src/features',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@store': './src/store',
          '@services': './src/services',
          '@utils': './src/utils',
          '@constants': './src/constants',
          '@theme': './src/theme',
          '@types': './src/types',
          '@i18n': './src/i18n',
          '@config': './src/config',
          '@assets': './src/assets',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
