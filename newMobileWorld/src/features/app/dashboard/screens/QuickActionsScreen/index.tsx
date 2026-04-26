import React from 'react';

import CenteredMessageScreen from '@components/layout/CenteredMessageScreen';

const QuickActionsScreen = (): React.JSX.Element => {
  return (
    <CenteredMessageScreen
      title="Quick Actions"
      subtitle="Bottom-sheet trigger with 5 action shortcuts."
    />
  );
};

export default QuickActionsScreen;
