import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from './navigation/RootNavigator';
import Providers from './providers';

const App = (): React.JSX.Element => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Providers>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </Providers>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
