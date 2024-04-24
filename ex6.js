function gerarLista(n, gerar) {
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(gerar(i));
    }

    return arr;
}

console.log(gerarLista(5, (e) => e * 2));