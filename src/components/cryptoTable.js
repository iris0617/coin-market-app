import React, { useContext } from 'react';
import { Tab, Table } from '@material-ui/core';
import { TableHead } from '@material-ui/core';
import { TableBody } from '@material-ui/core';
import { TableRow } from '@material-ui/core';
import { TableCell } from '@material-ui/core';
import SymbolContext from './symbolContext';
import CryptoItem from './cryptoItem';

const CryptoTable = () => {
   
   const { symbolsList, visibleSymbolIds} = useContext(SymbolContext);
   
   return (
      <Table>
         <TableHead>
            <TableCell>Symbol</TableCell>
            <TableCell>CMC Rank</TableCell>
            <TableCell>Price(USD)</TableCell>
            <TableCell>Delete</TableCell>
         </TableHead>
         <TableBody>
         { symbolsList.filter(symbol => visibleSymbolIds.includes(symbol.id)).map((symbol, idx) => (
            <TableRow className="table-row" width="100%" key={`${idx}`}> 
               <CryptoItem symbol={symbol} /> 
            </TableRow>
         ))}
         </TableBody>
      </Table>
   )
};

export default CryptoTable;