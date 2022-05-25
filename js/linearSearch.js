const arrayToSearchThrough = [];
for (let i = 1; i <= 1000; i++) {
    arrayToSearchThrough.push(i);
}

exports.linearSearch = function(valueToFind, arrayToSearchThrough) {
    let index = 0
    for (let elt of arrayToSearchThrough) {
        if (elt === valueToFind) {
            return index}
        index ++}

    return undefined
    };

exports.linearSearchGlobal = function (valueToFind, arrayToSearchThrough) {
    let index = 0
    let output = []
    for (let elt of arrayToSearchThrough) {
        if (elt === valueToFind) {
            output.push(index)
        }
        index ++
    }
    if (output) { //not empty
        return output
    }
    return undefined
}


