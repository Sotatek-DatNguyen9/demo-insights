import { StateType } from './index';
import reducerSettings from './modules/settings';

const rootReducer = ({ settings }: StateType, action: any) => ({
  settings: reducerSettings(settings, action),
});

export default rootReducer;