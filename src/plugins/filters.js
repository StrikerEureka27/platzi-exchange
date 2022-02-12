import numeral from 'numeral';



const dollarFilter = (value) => {
    let currency = numeral(value).format('$0,0.00');
    return currency;
}

const percent = (value) => {
    let percent = numeral(value).format('0.00 %');
    return percent;
}


export { dollarFilter, percent }