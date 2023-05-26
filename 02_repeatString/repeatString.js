const repeatString = function(string, i) {
    let answer = '';

    if (i < 0){
        return "ERROR";
    }

    for (let k = 0; k < i; k++){
        answer += string;
    }

    return answer;

};

// Do not edit below this line
module.exports = repeatString;
