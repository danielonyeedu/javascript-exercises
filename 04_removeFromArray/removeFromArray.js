const removeFromArray = function(array, ...args) {
    for (const val of args) {
        array = array.filter((element) => element !== val)
    }

    return array
};

// Do not edit below this line
module.exports = removeFromArray;
