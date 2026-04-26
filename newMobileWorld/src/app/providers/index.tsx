import React from 'react';

import { AppFlowProvider } from '@app/state/AppFlowContext';

type ProvidersProps = {
  children: React.ReactNode;
};

const Providers = ({ children }: ProvidersProps): React.JSX.Element => {
  return <AppFlowProvider>{children}</AppFlowProvider>;
};

export default Providers;
