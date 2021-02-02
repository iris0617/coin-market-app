import React, { useContext, useState } from 'react';
import { Select } from '@material-ui/core';
import SymbolContext from './symbolContext';
import { MenuItem } from '@material-ui/core';

const CryptoSelect = () => {
    const [selectedSymbol, setSelectedSymbol] = useState('');
    const { symbolsList, visibleSymbolIds, setVisibleSymbolIds } = useContext(SymbolContext);
    
    const handleSelect = (e) => {
        const selectedId = parseInt(e.target.value);
        setVisibleSymbolIds([...visibleSymbolIds, selectedId]);
        setSelectedSymbol(selectedId);
    }
    return (
        <div className="crypto-select">
        <label className="crypto-label">
            Select to Add:
        </label>
        <Select disabled={symbolsList.length===visibleSymbolIds.length} native={true} autoWidth={true} value={selectedSymbol} onChange={(e) => handleSelect(e)}>
            <option value=''> Add More Symbols :) </option>
            {symbolsList
                .filter(symbol => !visibleSymbolIds.includes(symbol.id))
                .map((symbol, idx) => (<option value={symbol.id} key={`${idx}`}>{symbol.symbol}</option>))    
            }
            
        </Select>
       
        </div>
    )
};
export default CryptoSelect;