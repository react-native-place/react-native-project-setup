type PossibleString = string | undefined | null;

interface StorageSetArgsType {
  key: string;
  value: unknown;
}

interface StorageGetArgsType {
  key: string;
}

interface StorageRemoveArgsType {
  key: string;
}

interface StorageMergeArgsType {
  key: string;
  value: unknown;
}

type LanguageKeyType = 'ta' | 'en';

export type {
  PossibleString,
  StorageSetArgsType,
  StorageGetArgsType,
  StorageRemoveArgsType,
  StorageMergeArgsType,
  LanguageKeyType,
};
