import {combineReducers} from 'redux';
import SessionReducer from './SessionReducer';
import GeneralReducer from './GeneralReducer';

const Reducers = combineReducers({
  SessionReducer: SessionReducer,
  GeneralReducer: GeneralReducer,
});
export default Reducers;
