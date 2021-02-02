import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchSymbolsList } from '../thunks/symbolThunk';
import { getSymbolListSuccess, setSymbolListError } from '../actions/symbols';
import SymbolContext from './symbolContext';
import CryptoTable from './cryptoTable';
import CryptoSelect from './cryptoSelect';

const CryptoMarket = ({ symbolsList, symbolsError, quotesError, getSymbolListSuccess, setSymbolListError }) => {
   
   const [ visibleSymbolIds, setVisibleSymbolIds ] = useState([]);
   
   useEffect(() => {
      fetchSymbolsList(getSymbolListSuccess, setSymbolListError, setVisibleSymbolIds);
   }, []);

   
   return (
      <SymbolContext.Provider 
         value={{ symbolsList, symbolsError, quotesError, visibleSymbolIds, setVisibleSymbolIds, getSymbolListSuccess, setSymbolListError }}
      >
      <div>
         <CryptoSelect />
         <CryptoTable />
      </div>
      </SymbolContext.Provider>
   )
};

const mapStateToProps = state => ({ symbolsList: state.symbolsList.list, symbolsError: state.symbolsList.error, quotesError: state.quotesInfoList.error })

export default connect(mapStateToProps, {
    getSymbolListSuccess, 
    setSymbolListError
})(CryptoMarket);