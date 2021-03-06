import { getSymbolsList } from '../services/symbolAPI';


export const fetchSymbolsList = async (symbolSuccessDispatch, symbolErrorDispatch, setVisibleSymbolIds) => {
    try{
        const response = await getSymbolsList();
        if(response && response.data && Array.isArray(response.data) && response.data.length>=10){
            const symbolResponse = response.data.slice(0, 10);
            symbolSuccessDispatch(symbolResponse);
            const visibleSymbolId = symbolResponse.map((ele => ele.id)).slice(0,5);
            setVisibleSymbolIds(visibleSymbolId);
        }
       else if(response && response.data && Array.isArray(response.data)) symbolSuccessDispatch(response.data);
       else if(response && response.status && response.status.error_message !==null){
           symbolErrorDispatch(`${response.status.error_code}: ${response.status.error_message}`)
       }
    }catch(e){
        symbolErrorDispatch(e.message);
    }
} 