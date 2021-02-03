import React, { useContext, useState } from 'react';
import { Select } from '@material-ui/core';
import SymbolContext from './symbolContext';

const CryptoSelect = () => {
    const ADD_MORE = 'add-more';
    const { symbolsList, visibleSymbolIds, setVisibleSymbolIds } = useContext(SymbolContext);
    
    const handleSelect = (e) => {
        let selectedId;
        if(e.target.value !== ''){
            selectedId = parseInt(e.target.value);
            setVisibleSymbolIds([...visibleSymbolIds, selectedId]);
        }
    }

    return (
        <div className="crypto-select">
        <label className="crypto-label">
            Select to Add:
        </label>
        <Select disabled={symbolsList.length===visibleSymbolIds.length} native={true} autoWidth={true} value={ADD_MORE} onChange={(e) => handleSelect(e)}>
            <option value={ADD_MORE}> Add More Symbols :) </option>
            {symbolsList
                .filter(symbol => !visibleSymbolIds.includes(symbol.id))
                .map((symbol, idx) => (<option value={symbol.id} key={`${idx}`}>{symbol.symbol}</option>))    
            }
            
        </Select>
       
        </div>
    )
};
export default CryptoSelect;