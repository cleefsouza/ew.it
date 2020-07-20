const service = require('./service');

Array.prototype.meuMap = function (callback) {
    const novoArrayMapeado = [];

    for (let index = 0; index < this.length-1; index++) {
        const retorno = callback(this[index], index);
        novoArrayMapeado.push(retorno);
    }

    return novoArrayMapeado;
}

async function main() {
    try {
        const retorno = await service.obterPessoas('A');
        // const nomes = [];

        // retorno.results.forEach((pessoa) => {
        //     nomes.push(pessoa.name);
        // });

        // const nomes = retorno.results.meuMap((pessoa, index) => {
        //     return pessoa.name;
        // });

        const nomes = retorno.results.map((pessoa) => {
            return pessoa.name;
        });

        console.log('Nomes:', nomes);
    } catch (error) {
        console.error('Erro interno:', error);
    }
}

main();