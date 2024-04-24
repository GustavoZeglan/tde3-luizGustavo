function filtrarArray(arr, callback) {
    return arr.filter(callback);
}

function ehPar(num) {
    return num % 2 === 0;
}

console.log(filtrarArray([2, 3, 4, 5, 6], (e) => ehPar(e)));