function encontrarMaiorElemento(arr) {
    let aux = 0;
    for (const num of arr) {
        if (num > aux) {
            aux = num;
        }
    }

    return aux;
}

console.log(encontrarMaiorElemento([4, 7, 9, 1, 11]));