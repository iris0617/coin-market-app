import { symbolActions } from '../utils/constants';

const initialState={ list: [], error: [] };

const SymbolReducer = (state=initialState, action) => {
    switch(action.type){
        case symbolActions.GET_SYMBOL_LIST_SUCCESS:
            return { list: action.payload, error: []};
        case symbolActions.SET_SYMBOL_LIST_ERROR:
            return { list: [], error: [...state.error, action.payload]}
        
        default:
            return state;
    }
}
export default SymbolReducer;