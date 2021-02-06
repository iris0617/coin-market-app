import React, { useContext, useEffect } from 'react';
import { Alert } from '@material-ui/lab';
import { Table } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import SymbolContext from './symbolContext';
import CryptoItem from './cryptoItem';

const CryptoTable = () => {
   
   const { symbolsList, visibleSymbolIds, symbolsError, quotesError } = useContext(SymbolContext);

   
   return (
      <React.Fragment>
         {symbolsError && Array.isArray(symbolsError) && symbolsError.length>0 && <Alert color="error">{symbolsError.join(', ')}</Alert>}
         {quotesError && Array.isArray(quotesError) && quotesError.length>0 && <Alert color="error">{quotesError.join(', ')}</Alert>}
         <Table>
            <TableHead>
               <TableRow>
                  <TableCell>Symbol</TableCell>
                  <TableCell>CMC Rank</TableCell>
                  <TableCell>Price(USD)</TableCell>
                  <TableCell>Delete</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
            { symbolsList.filter(symbol => visibleSymbolIds.includes(symbol.id)).map((symbol, idx) => (
               <TableRow className="table-row" width="100%" key={`${idx}`}> 
                  <CryptoItem symbol={symbol} /> 
               </TableRow>
            ))}
            </TableBody>
         </Table>
      </React.Fragment>
   )
};

export default CryptoTable;