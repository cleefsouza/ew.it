const axios = require('axios');
const urlBase = 'https://swapi.dev/api/people';

async function obterPessoas(nome) {
    const url = `${urlBase}/?search=${nome}&format=json`;
    const response = await axios.get(url);

    return response.data;
}

module.exports = {
    obterPessoas
};