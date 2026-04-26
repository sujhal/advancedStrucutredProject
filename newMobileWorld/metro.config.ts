import { getDefaultConfig, mergeConfig } from '@react-native/metro-config';

const rootDir = process.cwd();

const config = {
  resolver: {
    alias: {
      '@app': `${rootDir}/src/app`,
      '@features': `${rootDir}/src/features`,
      '@components': `${rootDir}/src/components`,
      '@hooks': `${rootDir}/src/hooks`,
      '@store': `${rootDir}/src/store`,
      '@services': `${rootDir}/src/services`,
      '@utils': `${rootDir}/src/utils`,
      '@constants': `${rootDir}/src/constants`,
      '@theme': `${rootDir}/src/theme`,
      '@types': `${rootDir}/src/types`,
      '@i18n': `${rootDir}/src/i18n`,
      '@config': `${rootDir}/src/config`,
      '@res': `${rootDir}/src/res`,
    },
  },
} as unknown as Parameters<typeof mergeConfig>[1];

export default mergeConfig(getDefaultConfig(rootDir), config);
