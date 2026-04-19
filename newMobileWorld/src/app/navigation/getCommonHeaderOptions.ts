import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import { commonHeaderStyle } from '@app/navigation/commonHeaderStyle';

export const getCommonHeaderOptions = (
  title: string,
): NativeStackNavigationOptions => ({
  title,
  ...commonHeaderStyle,
});
