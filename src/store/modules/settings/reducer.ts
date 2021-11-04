import * as ActionType from './actions';
const { DEFAULT_SETTINGS, REQUEST_ERROR } = ActionType;

export type SettingType = {
  locale: string;
  country: string;
  procedureId: string;
  notify: JSX.Element | string;
  loading: boolean;
  isError: boolean;
  errorCode?: number;
  riskScore: number;
};

export default function (state: SettingType, action: any) {
  const { data, type, error } = action;
  switch (type) {
    case DEFAULT_SETTINGS:
      if (data) {
        return { ...state, ...data };
      }
      break;
    case REQUEST_ERROR:
      if (error) {
        const errorCode = 500;
        return { ...state, isError: true, errorCode };
      }
      break;
    default:
      return state;
  }
}