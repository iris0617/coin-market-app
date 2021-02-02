import { combineReducers } from 'redux';
import SymbolReducer from './symbolReducer';
import QuotesReducer from './quotesReducer';


export default combineReducers({
    symbolsList: SymbolReducer,
    quotesInfoList: QuotesReducer
});