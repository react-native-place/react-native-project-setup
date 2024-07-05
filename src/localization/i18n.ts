import i18n from 'i18next';
import type {LanguageDetectorAsyncModule, Resource} from 'i18next';
import {initReactI18next} from 'react-i18next';

import {ta, en} from './translations';
import {LanguageKeyType} from '../types';
import {storage} from '../utils';
import {storageKeys} from '../constants';

const languageKey: string = storageKeys?.settings?.LANGUAGE_KEY;

const languageDetectorPlugin: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async function (
    callback: (lang: string) => void | undefined,
  ): Promise<undefined> {
    try {
      const language: LanguageKeyType = await storage.get({
        key: languageKey,
      });

      if (language) {
        callback(language);
      } else {
        callback('en');
      }
    } catch (error: unknown) {
      const err: Error = error as Error;

      console.error('Storage::', 'Get language key:', ' ', err?.message);
    }
  },
  cacheUserLanguage: async function (language: string) {
    try {
      await storage.set({
        key: languageKey,
        value: language,
      });
    } catch (error: unknown) {
      const err: Error = error as Error;

      console.error('Storage::', 'Set language key:', ' ', err?.message);
    }
  },
};
const resources: Resource = {
  ta: {
    translation: ta,
  },
  en: {
    translation: en,
  },
};

i18n
  .use(initReactI18next)
  .use(languageDetectorPlugin)
  .init({
    resources,
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export {i18n};
