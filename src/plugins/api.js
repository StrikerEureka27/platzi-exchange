const URL = 'https://api.coincap.io/v2/assets?limit=5';


const obtainDataApi = async ()  => {
    try {
        const response = await fetch(URL);
        const parseResponse = await response.json();
        return parseResponse.data;
    } catch (error) {
        console.error(error);
    }
}


const obtainDataCoins = async () => {
    try {
        const characters = await obtainDataApi();
        return characters;
    } catch (error) {
        console.error(error);
    }
}


const obtainCoinDetails = async (coinName) =>{
    try{
        const coinDetail = URL.split("?")[0]+`/${coinName.toLowerCase()}`;
        const response = await fetch(coinDetail, { method: "GET" } );
        let parsedResponse = await response.json();
        console.log(parsedResponse);
        return parsedResponse;
    }catch(e){
        console.log(e);
    }
}

function getAssetHistory(coin) {
    /*const now = new Date()
    const end = now.getTime()
    now.setDate(now.getDate() - 1)
    const start = now.getTime()*/
  
    return fetch(
      `${URL.split('?')[0]}/${coin}/history?interval=d1`
    )
      .then(res => res.json())
      .then(res => res.data)
  }
  

export default {
    obtainDataCoins, 
    obtainCoinDetails,
    getAssetHistory
}