import React, { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RootNavigator } from '@app/navigation';
import { AppProviders } from '@app/providers';
import ErrorBoundary from '@components/feedback/ErrorBoundary';
import { store } from '@store/index';
import { EVENTS, logEvent } from '@services/analytics';
import { initSentry } from '@services/sentry';

initSentry();

const App = () => {
  const scheme = useColorScheme();

  useEffect(() => {
    logEvent({ name: EVENTS.APP_OPENED, screen: 'App', feature: 'app' });
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar barStyle={scheme === 'dark' ? 'light-content' : 'dark-content'} />
        <Provider store={store}>
          <ErrorBoundary>
            <AppProviders>
              <RootNavigator />
            </AppProviders>
          </ErrorBoundary>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
