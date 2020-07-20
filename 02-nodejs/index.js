/**
 * 1. Obter usuário
 * 2. Obter telefone por id do usuário
 * 3. Obter endereço por id do usuário
 */

function obterUsuario() {
    return new Promise(function resolverPromisse(resolve, reject) {
        setTimeout(function () {
            return resolve({
                id: 1,
                nome: 'Aladdin',
                dataNascimento: new Date()
            });
        }, 1000);
    });

}

function obterTelefonePorUsuario(idUsuario) {
    return new Promise(function resolverPromisse(resolve, reject) {
        setTimeout(function () {
            return resolve({
                numero: '1199002',
                ddd: 83
            });
        }, 2000);
    });
}

function obterEnderecoPorUsuario(idUsuario) {
    return new Promise(function resolverPromisse(resolve, reject) {
        setTimeout(function () {
            return resolve({
                rua: 'Rua dos bobos',
                numero: 0
            });
        }, 2000);
    });
}

async function main() {
    try {
        const usuario = await obterUsuario();
        const dados = await Promise.all([
            obterTelefonePorUsuario(usuario.id),
            obterEnderecoPorUsuario(usuario.id)
        ]);

        usuario.telefone = dados[0];
        usuario.endereco = dados[1];

        console.log(usuario);
    } catch (error) {
        console.error('DEU RUIM ...', error)
    }
}

main();

// const usuarioPromisse = obterUsuario();

// usuarioPromisse
//     .then(function (usuario) {
//         return obterTelefonePorUsuario(usuario.id)
//             .then(function resolverTelefone(result) {
//                 return {
//                     usuario: {
//                         id: usuario.id,
//                         nome: usuario.nome
//                     },
//                     telefone: result
//                 }
//             });
//     })
//     .then(function (resultado) {
//         return obterEnderecoPorUsuario(resultado.usuario.id)
//             .then(function resolverEndereco(result) {
//                 return {
//                     usuario: resultado.usuario,
//                     telefone: resultado.telefone,
//                     endereco: result
//                 }
//             });
//     })
//     .then(function (retorno) {
//         console.log('Sucesso:', retorno)
//     })
//     .catch(function (erro) {
//         console.error('DEU RUIM', erro);
//     });

// function resolverUsuario(erro, usuario) {
//     console.log('Usuário', usuario);
// }

// obterUsuario(function resolverUsuario(erro, usuario) {
//     if (erro) {
//         console.error('DEU RUIM em USUÁRIO', erro);
//         return;
//     }

//     obterTelefonePorUsuario(usuario.id, function resolverTelefone(erroTel, telefone) {
//         if (erroTel) {
//             console.error('DEU RUIM em TELEFONE', erroTel);
//             return;
//         }

//         obterEnderecoPorUsuario(usuario.id, function resolverEndereco(erroEnd, endereco) {
//             if (erroEnd) {
//                 console.error('DEU RUIM em ENDEREÇO', erroEnd);
//                return;
//             }

//             console.log(`
//             Nome: ${usuario.nome},
//             Telefone: (${telefone.ddd}) ${telefone.numero},
//             Endereço: ${endereco.rua}, ${endereco.numero}
//             `);
//         });
//     });
// });
