import {combineReducers} from 'redux';
import itemsListReducer from './itemsList';

const rootReducer = combineReducers({itemsList: itemsListReducer});

export default rootReducer;
