let arr = [4,2,6,0]
let n = arr.length
// console.log(n)
var i, j, min;
for (i = 0; i <= n; i++) {
    min = i;
    for (j = i + 1; j <= n; j++) 
        if (arr[j] < arr[min])
            min = j;
    if (min != i) {
        temp = arr[min];
        arr[min] = arr[i];
        arr[i] = temp;
    }
}
console.log("Selection  Sort:-", arr)