let arr = [4,2,6,0]
let n = arr.length
// console.log(n)
var i, j, temp;
var swapped;
for (i = 0; i < n; i++) {
    swapped = false;
    for (j = 0; j < n - i; j++) {
        if (arr[j] > arr[j + 1]) {
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            swapped = true;
        }
    } if (swapped == false)
        break;
}
console.log("Bubble Sort:-",arr)