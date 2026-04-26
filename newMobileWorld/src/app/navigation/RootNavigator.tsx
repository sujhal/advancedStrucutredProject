import React from 'react';

import { useAppFlow } from '@app/state/AppFlowContext';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const RootNavigator = (): React.JSX.Element => {
  const { isAuthenticated } = useAppFlow();

  return isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />;
};

export default RootNavigator;
