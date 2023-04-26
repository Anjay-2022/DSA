// let arr = [1,2,3,4,5,6,7,8,9,10]            //0,10  omega
// let arr = [6,7,8,9,10,1,2,3,4,5]            //5,60   Theta
let arr = [1,2,3,4,5,10,9,8,7,6]            //4,50   Theta
// let arr = [10,9,8,7,6,5,4,3,2,1]            //9,100  Big o 

let n = arr.length
console.log(n)
var i, j, temp;
var swapped,outer=0,inner=0;
for (i = 0; i < n; i++) {
    swapped = false;
    for (j = 0; j < n; j++) {
        inner++;
        if (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
        }
    } if (swapped == false)
        break;
        outer++
}
console.log("Bubble Sort:-",arr)
console.log("No. of times swapping done",outer,inner);