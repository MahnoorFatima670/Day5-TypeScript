var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//problem no:1
function manipulateArrays(array1, array2) {
    var counter = 0;
    var mergearray = [];
    var product = 1;
    var sum = 0;
    var sum1 = 0;
    var middleEle;
    console.log("First array:".concat(array1));
    console.log("second array:".concat(array2));
    if (array1.length == array2.length) {
        for (var i = 0; i < array1.length; i++) {
            if (array1[i] == array2[i]) {
                counter++;
            }
        }
        if (counter == array1.length && counter == array2.length) {
            mergearray.push.apply(mergearray, __spreadArray(__spreadArray([], array1, false), array2, false));
            console.log("merge two arrays:".concat(mergearray));
            for (var j = 0; j < mergearray.length; j++) {
                product = product * mergearray[j];
            }
            return "Product of merged array is:".concat(product);
        }
        else {
            for (var a = 0; a < array1.length; a++) {
                sum = array1[a] + array2[a];
                mergearray.push(sum);
            }
            console.log("Merge Array by adding corresponding elements of two arrays:".concat(mergearray));
            for (var b = 0; b < mergearray.length; b++) {
                sum1 = sum1 + mergearray[b];
            }
            console.log("sum of merged array is:".concat(sum1));
        }
    }
    else {
        mergearray.push.apply(mergearray, __spreadArray(__spreadArray([], array1, false), array2, false));
        console.log("Merge array of two arrays array1 and array2 is:".concat(mergearray));
        middleEle = mergearray[Math.floor(mergearray.length / 2)];
        console.log("middle element of merged array is:".concat(middleEle));
    }
}
console.log(manipulateArrays([1, 9], [1, 9, 3]));
//problem no:2
function extractFirstLetter(myArray) {
    var firstLetterarray = [];
    for (var z = 0; z < myArray.length; z++) {
        firstLetterarray.push(myArray[z][0]);
    }
    return firstLetterarray;
}
console.log(extractFirstLetter(['hadia', 'eman', 'Tuba']));
