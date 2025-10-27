/**
 * @constants APP_CONFIG
 * @summary Application-wide configuration constants
 * @category core-constants
 */
export const APP_CONFIG = {
  APP_NAME: 'Gerador de Senhas Seguras',
  APP_VERSION: '1.0.0',
  DEFAULT_LANGUAGE: 'pt-BR',
} as const;

/**
 * @constants PASSWORD_CONFIG
 * @summary Password generation configuration constants
 * @category core-constants
 */
export const PASSWORD_CONFIG = {
  MIN_LENGTH: 6,
  MAX_LENGTH: 64,
  DEFAULT_LENGTH: 16,
} as const;
