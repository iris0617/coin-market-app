import { symbolActions } from '../utils/constants';

const initialState=[];

const SymbolReducer = (state=initialState, action) => {
    switch(action.type){
        case symbolActions.GET_SYMBOL_LIST_SUCCESS:
            return action.payload;
        case symbolActions.SET_SYMBOL_LIST_ERROR:
            return {...state, error: action.payload}
        
        default:
            return state;
    }
}
export default SymbolReducer;