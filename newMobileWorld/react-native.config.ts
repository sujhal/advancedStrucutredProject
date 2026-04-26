type ReactNativeConfig = {
  project: {
    ios: Record<string, unknown>;
    android: Record<string, unknown>;
  };
  assets: string[];
};

const config: ReactNativeConfig = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/res/fonts/'],
};

export default config;
