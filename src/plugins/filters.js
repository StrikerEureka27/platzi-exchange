import numeral from 'numeral';



const dollarFilter = (value) => {
    let currency = numeral(value).format('$0,0.00');
    return currency;
}

const percent = (value) => {
    let percent = numeral(value).format('0.00 %');
    return percent;
}

const bigNumber = (value) => {
    let bigNumber = numeral(value).format('0,0.0000'); 
    return bigNumber;
}


export { dollarFilter, percent, bigNumber }