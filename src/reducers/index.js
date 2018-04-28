import { combineReducers } from 'redux';
import {calculator} from './calculatorReducer'
const rootReducer = combineReducers({
    //app state json fetching data from reducers
    // state1: reducer1,
    calculator:calculator
});
export default rootReducer;