import {
  createNavigationContainerRef,
  type NavigationAction,
} from '@react-navigation/native';

import { ROUTE_NAMES } from '@app/navigation/routeNames';
import type { RootStackParamList } from '@types/navigation';

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const dispatchNavigation = (action: NavigationAction) => {
  navigationRef.dispatch(action);
};

export const navigate = <T extends keyof RootStackParamList>(
  name: T,
  params?: RootStackParamList[T],
) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate({ name, params } as never);
  }
};

export const resetToAuth = (): void => {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{ name: ROUTE_NAMES.AuthStack }],
    });
  }
};
