const { obterPessoas } = require('./service'); // Destruct

Array.prototype.meuReduce = function (callback, inicial) {
    let final = typeof inicial !== undefined ? inicial : this[0];

    for (let index = 0; index <= this.length - 1; index++) {
        final = callback(final, this[index], this);
    }

    return final;
}

async function main() {
    try {
        const { results } = await obterPessoas('a');

        const pesos = results.map(item => parseInt(item.height));

        // const total = pesos.reduce((ante, prox) => {
        //     return ante + prox;
        // }, 0);

        const total = pesos.meuReduce((ante, prox) => {
            return ante + prox;
        }, 0);

        console.log(total);
    } catch (error) {
        console.error('DEU RUIM', error);
    }
}

main();