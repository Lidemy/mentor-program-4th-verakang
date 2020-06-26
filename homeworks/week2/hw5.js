function join(arr, concatStr) {
    var newStr = arr[0]
    for (var i = 1; i < arr.length; i++) {
        newStr += concatStr + arr[i]
    }
    return newStr
}

//解法2
function join2(arr, concatStr) {
    var newStr = ""
    for (var i = 0; i < arr.length; i++) {
        newStr += arr[i] + concatStr
    }
    return newStr.slice(0, - 1)
}


function repeat(str, times) {
    newStr = ""
    for (var i = 0; i < times; i++) {
        newStr += str
    }
    return newStr
}

console.log(join(['a'], '!'));
console.log(join2(['a'], '!'));
console.log(repeat('a', 5));
