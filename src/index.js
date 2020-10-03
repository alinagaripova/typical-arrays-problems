
exports.min = function min (array) {
    let minNumberInArray = Math.min.apply(null, array);
    if (minNumberInArray == Infinity) {
        minNumberInArray = 0;
    }
    return minNumberInArray
}

exports.max = function max (array) {
    let minNumberInArray = Math.max.apply(null, array);
    if (minNumberInArray === -Infinity) {
        minNumberInArray = 0;
    }
    return minNumberInArray
}

exports.avg = function avg (array) {
    if (array && array.length > 1) {
        return array.reduce((a, b) => (a + b)) / array.length;
    } else {
        return 0;
    }
}
