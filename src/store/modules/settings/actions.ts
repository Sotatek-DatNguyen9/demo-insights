/**
 * Default Settings
 */
export const DEFAULT_SETTINGS = 'DEFAULT_SETTINGS';

/**
 * Send Message to Parent
 */
export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

/**
 * Redux Request Error
 */
export const REQUEST_ERROR = 'REQUEST_ERROR';

/**
 * Send Message
 */
export const sendMessageRequest = (action: string) => {
  return {
    type: action,
  };
};

/**
 * Update Default Settings Object
 */

export const updateDefaultSettings = (data: any) => {
  return {
    type: DEFAULT_SETTINGS,
    data,
  };
};