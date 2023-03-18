// let array1 = [value1, value2,]; // Method 1
// let array2 = new Array(); // Method 2

let numbers = [30, 60, 190];
let result = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 100) {
        result += 1;
        break;
    }
}
console.log("elments greater than 100:",result);



let number1 = [30, 60, 90];
let result1 = number1.every(function (element) {
    return (element < 100);
});
console.log("elments less than 100:",result1);



function fnCheckDatatype_Every(arr, sDatatype) {
    return arr.every(function (element) {
        return typeof (element) === sDatatype;
    }, sDatatype);
}
console.log(fnCheckDatatype_Every(["Geeks", "for", "Geeks"], "string"));
console.log(fnCheckDatatype_Every(["Geeks", 4, "Geeks"], "string"));

function fnIsGreaterThan100_loop(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 100) {
            return true;
        }
    }
    return false;
}
console.log(fnIsGreaterThan100_loop([30, 60, 90, 120]));
console.log(fnIsGreaterThan100_loop([30, 60, 90]));


function fnIsGreaterThan100_some(arr) {
    return arr.some(function (element) {
        return (element > 100);
    });
}
console.log(fnIsGreaterThan100_some([30, 60, 90, 120]));
console.log(fnIsGreaterThan100_some([30, 60, 90]));

function fnIsEven_some(arr) {
    return arr.some(function (element) {
        return (element % 2 === 0);
    });
}
console.log(fnIsEven_some([1, 3, 5]));
console.log(fnIsEven_some([1, 3, 5, 6]));



function fnFilterStudents_filter(aStudent) {
    return aStudent.filter(function (oStudent) {
        return oStudent.fPercentage > 80.0;
    });
}
aStudent = [
    { sStudentId: "001", fPercentage: 91.2 },
    { sStudentId: "002", fPercentage: 78.7 },
    { sStudentId: "003", fPercentage: 62.9 },
    { sStudentId: "004", fPercentage: 81.4 }];
console.log("FilterStudents greater than 80% ",fnFilterStudents_filter(aStudent));


function removeUndefined(myArray) {
    return myArray.filter(
        function (element, index, array) {
            console.log("element",element)
            console.log("index",index)
            console.log("array",array)
            return element;
        });
}
var arr = [1, undefined, 3, undefined, 5];
console.log(arr);
console.log("removeUndefined elments",removeUndefined(arr));


function reduceFun1(previousValue, currentValue, index, array) {
    console.log("previousValue",previousValue)
    console.log("currentValue",currentValue)
    console.log("index",index)
    console.log("array",array)
    return previousValue + currentValue;
}
var result2 = [1, 2, 3, 4, 5].reduce(reduceFun1);
console.log("reduce function to sum of elments: ",result2)


var arr1 = [1,2,3,4];
var arr2 = [5,6];
var arr3 = [7,8];
var arr4 = arr1.concat(arr2,arr3);
console.log(arr4);

console.log("sorting",[3, 1, 5, 4, 2].sort());
console.log("reversing",[1,2,3,4,5,6,7,8,9,10].reverse());


var number_arr = [ 10, 20, 30, 40, 50 ]
console.log("to string()",number_arr.toString())
console.log("isArray()",Array.isArray(number_arr))
console.log("push(60)",number_arr.push(60))
console.log(number_arr)
console.log("unshift(10, 20)",number_arr.unshift(10, 20))
console.log(number_arr)
console.log("pop()",number_arr.pop())
console.log(number_arr)
console.log("shift()",number_arr.shift())
console.log(number_arr)
console.log("splice(1, 3, 3, 4, 5)",number_arr.splice(1, 3, 3, 4, 5))
console.log(number_arr)
let left = number_arr.splice(0,3)    //delete elements 0,1,2 and also assign into left
console.log("left",left)
console.log("number",number_arr)



let number = [20,5.2,-120,100,30,0];
/* Logic:
   20 - (5.2) = +ve => 5.2 would be placed before 20,
   20 - (-120) = +ve => -120 would be placed before 20,
   20 - (100) = -ve => 100 would be placed after 20,
   20 - (30) = -ve => 30 would be placed after 20,
   20 - (0) = +ve => 0 would be placed before 20,
   Similarly for every element, we check and place them accordingly in iterations.
*/
function compare(a,b){return a-b;}
console.log(numbers.sort(compare));


var array = [-10, -0.20, 0.30, -40, -50];
// function (return element > 0).
var found = array.findIndex(function (element) {
    return element > 0;  });
// Printing desired values.
console.log(found);