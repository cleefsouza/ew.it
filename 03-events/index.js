const EventEmitter = require('events');

class MeuEmissor extends EventEmitter {
}

const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';

meuEmissor.on(nomeEvento, (click) => {
    console.log('Um usuário clicou ...', click)
});

// let cont = 0;

// setInterval(() => {
//     meuEmissor.emit(nomeEvento, `no ok (${cont++}).`);
// }, 1000);

const stdin = process.openStdin();
stdin.addListener('data', (value) => {
    console.log(`Você digitou: ${value.toString().trim()}`);
});