function somaElementosPares(arr) {
    return arr.reduce((total, i) => {
        if (i % 2 === 0) {
            total += i;
        }
        return total;
    })
}

console.log(somaElementosPares([2, 3, 4, 5, 6]));