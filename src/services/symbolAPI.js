import axios from "axios"

const url = 'https://www.stackadapt.com/coinmarketcap/map';

export const getSymbolsList = () => (
    axios.get(url)
    .then(res => (res.data))
    .catch(err => {throw new Error(`fetch symbol error : ${err}`)})
);

