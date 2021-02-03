import { quotesActions } from '../utils/constants';

const initialState={ list: {}, error: [] };

const QuotesReducer = (state=initialState, action) => {
    switch(action.type){
        case quotesActions.GET_QUOTE_INFO_SUCCESS:
            return { ...state, list: {...action.payload}, error: [] }
        case quotesActions.SET_QUOTE_INFO_ERROR:
            return { ...state, list: {}, error: [...state.error, action.payload] }
        default:
            return state;
    }
}
export default QuotesReducer;