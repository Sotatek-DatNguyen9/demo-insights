import React, { createContext, Dispatch, useReducer } from 'react';
import rootReducer from './rootReducer';
import { SettingType } from './modules/settings';

export type StateType = {
  settings: SettingType;
};

const initSettings: SettingType = {
  locale: 'en',
  country: '',
  procedureId: 'A01005N1994',
  notify: '',
  loading: false,
  isError: false,
  riskScore: 1,
};

const initialState: StateType = {
  settings: initSettings,
};

/**
 * Create StoreContext
 * @type {React.Context<null>}
 */
export const StoreContext = createContext<{
  state: StateType;
  dispatch: Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

export const AppProvider: React.FC = ({ children }: any) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  return <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>;
};