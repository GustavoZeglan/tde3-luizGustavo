function validarDados(obj, callback) {
    return callback(obj);
}

const pessoa = {
    nome: "Luiz",
    idade: 18,
}

console.log(validarDados(pessoa, (e) => e.idade >= 18));