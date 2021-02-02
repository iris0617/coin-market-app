import { getQuoteInfo } from '../services/quotesAPI';

export const fetchQuotesInfo = async (id, quotesSuccessDispatch, quotesErrorDispatch) => {
    
    try{
        const response = await getQuoteInfo(id);
        if(response && response.data){
            quotesSuccessDispatch(response.data);
        }
    }catch(e){
        quotesErrorDispatch(e.message);
    }
} 