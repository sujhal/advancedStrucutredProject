import { useDispatch, useSelector } from 'react-redux';

import { store } from './index';
import type { RootState } from './rootReducer';

export const useAppDispatch = () => useDispatch<typeof store.dispatch>();

export const useAppSelector = <TSelected>(
  selector: (state: RootState) => TSelected,
  equalityFn?: (left: TSelected, right: TSelected) => boolean,
) => useSelector(selector, equalityFn);
