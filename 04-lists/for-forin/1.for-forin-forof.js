const service = require('./service');

async function main() {
    try {
        const retorno = await service.obterPessoas('A');
        const nomes = [];

        // for (let index = 0; index < retorno.results.length-1; index++) {
        //     const pessoa = retorno.results[index];
        //     nomes.push(pessoa.name);
        // }

        // for (let index in retorno.results) {
        //     const pessoa = retorno.results[index];
        //     nomes.push(pessoa.name);
        // }

        for (pessoa of retorno.results) {
            nomes.push(pessoa.name);
        }

        console.log('Nomes:', nomes);
    } catch (error) {
        console.error('Erro interno:', error);
    }
}

main();