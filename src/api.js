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


export default {
    obtainDataCoins
}