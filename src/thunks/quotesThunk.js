import { getQuoteInfo } from '../services/quotesAPI';

export const fetchQuotesInfo = async (id, quotesSuccessDispatch, quotesErrorDispatch) => {
    
    try{
        const response = await getQuoteInfo(id);
        if(response && response.data){
            quotesSuccessDispatch(response.data);
        }
        else if(response && response.status && response.status.error_message !== null){
            quotesErrorDispatch(`${response.status.error_code}: ${response.status.error_message}`)
        }
    }catch(e){
        quotesErrorDispatch(e.message);
    }
} 