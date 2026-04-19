import React, { createContext, type PropsWithChildren, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';

type ThemeMode = 'light' | 'dark';

type ThemeContextValue = {
  mode: ThemeMode;
};

const ThemeContext = createContext<ThemeContextValue>({ mode: 'light' });

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const scheme = useColorScheme();
  const value = useMemo<ThemeContextValue>(
    () => ({
      mode: scheme === 'dark' ? 'dark' : 'light',
    }),
    [scheme],
  );
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextValue => useContext(ThemeContext);
