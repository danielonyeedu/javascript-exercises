const sumAll = function(s, e) {
    if (typeof s !== "number" || typeof e !== "number" || s < 0 || e < 0){
        return "ERROR"
    }

    if (s > e){
        let temp = e
        e = s
        s = temp
    }
    let sum = 0

    for (let i = s; i <= e; i++){
        sum += i
    }

    return sum

};

// Do not edit below this line
module.exports = sumAll;
