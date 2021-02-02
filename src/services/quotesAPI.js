import axios from 'axios';
const url = "https://www.stackadapt.com/coinmarketcap/quotes";

export const getQuoteInfo = (id) => (
    axios
    .get(`${url}?id=${id}`)
    .then(res => (res.data))
    .catch(err => {throw new Error(`fetch quotes error: ${err}`)})
    );