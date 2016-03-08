import { combineReducers } from 'redux';
import ResumeReducer from './reducerResume';

const rootReducer = combineReducers({
    resume: ResumeReducer
});

export default rootReducer;