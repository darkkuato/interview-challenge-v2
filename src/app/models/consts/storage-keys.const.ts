export const storageKeys = {
  token: 'token',
  cuit: 'cuit',
} as const;

export type StorageKey = (typeof storageKeys)[keyof typeof storageKeys];
