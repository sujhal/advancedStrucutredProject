import './config';

import { useTranslation } from 'react-i18next';

import { i18n } from './config';
import type { TranslationKey } from './types';

export { i18n } from './config';

export const t = (key: TranslationKey): string => i18n.t(key);

export const useI18n = (): {
  t: (key: TranslationKey) => string;
} => {
  const { t: translate } = useTranslation();
  return {
    t: (key: TranslationKey) => translate(key),
  };
};
