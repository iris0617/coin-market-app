import { quotesActions } from '../utils/constants';

const initialState={};

const QuotesReducer = (state=initialState, action) => {
    switch(action.type){
        case quotesActions.GET_QUOTE_INFO_SUCCESS:
            return {...state, ...action.payload}
        case quotesActions.SET_QUOTE_INFO_ERROR:
            return {...state, error: action.payload}
        default:
            return state;
    }
}
export default QuotesReducer;