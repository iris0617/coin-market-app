import React, { useContext, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import { Badge } from '@material-ui/core';
import { getQuotesListSuccess, setQuotesListError } from '../actions/quotes';
import { fetchQuotesInfo } from '../thunks/quotesThunk';
import SymbolContext from './symbolContext';

const CryptoItem = ({ symbol, getQuotesListSuccess, quotesInfoList }) => {
    
    const { visibleSymbolIds, setVisibleSymbolIds } = useContext(SymbolContext);
    const [ rank, setRank ] = useState(null);
    const [ quotePrice, setQuotePrice ] = useState(null);
    
    useEffect(() => {
        fetchQuotesInfo(symbol.id, getQuotesListSuccess, setQuotesListError);
    }, []);


    useEffect(() => {
        if(quotesInfoList && quotesInfoList[symbol.id] && quotesInfoList[symbol.id].cmc_rank){
            setRank(quotesInfoList[symbol.id].cmc_rank);
        }
        if(quotesInfoList && quotesInfoList[symbol.id]&& quotesInfoList[symbol.id].quote.USD.price){
            setQuotePrice(quotesInfoList[symbol.id].quote.USD.price);
        }
    }, [quotesInfoList]);
  

    const handleDelete = () => {
        setVisibleSymbolIds(visibleSymbolIds.filter(id => (id != symbol.id)));
    }


    return (
        <React.Fragment>
            <TableCell>{symbol.symbol} </TableCell>
            <TableCell>{rank ? `${rank}` : <Badge color="error"> N/A</Badge>} </TableCell>
            <TableCell>{quotePrice ? `${quotePrice}` : <Badge color="error">N/A</Badge>} </TableCell>
            <TableCell><Button variant="contained" disabled={visibleSymbolIds.length === 1} color="primary" value={symbol.id} onClick={handleDelete}>Delete</Button></TableCell>
        </React.Fragment>
    )
};

const mapStateToProps = state => ({ quotesInfoList : state.quotesInfoList })

export default connect(mapStateToProps, {
    getQuotesListSuccess
})(CryptoItem);