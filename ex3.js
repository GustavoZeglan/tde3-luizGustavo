function mapearArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = callback(arr[i]);
    }

    return arr;
}

console.log(mapearArray([2, 3, 4, 5], (e) => e * 2));