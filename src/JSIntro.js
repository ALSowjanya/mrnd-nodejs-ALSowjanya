
exports.Sum = function (num1, num2) {
    return num1 + num2;
}

exports.SumOfArray = function(arrayOfNums){
    var i, sum = 0;
    for (i = 0; i < arrayOfNums.length; i++) {
        sum += arrayOfNums[i];
    }
    return sum;
}

// Sum only the unique numbers in the array.
// Ex: If array is [2,3,3,2], the sum is 2+3=5

exports.SumOfUniqueNumbers = function (arrayOfNums) {
    var i, sum = 0, flag = 0;
    for (i = 0; i < arrayOfNums.length; i++) {
        for (j = i - 1; j >= 0; j--) {
            if (arrayOfNums[i] == arrayOfNums[j]) {
                flag = 1;
                break;
            }
        }
        if(flag == 0)
            sum += arrayOfNums[i];
    }
    return sum;
}

exports.ReverseString = function(str){
    return str.split("").reverse("").join("");
}


exports.ReverseArrayOfStrings = function (arrayOfStrings) {
    var i, j;
    var temp;
    for (i = 0, j = arrayOfStrings.length - 1; i < j; i++, j--) {
        temp = arrayOfStrings[i];
        arrayOfStrings[i] = arrayOfStrings[j];
        arrayOfStrings[j] = temp;
    }
    return arrayOfStrings;
}