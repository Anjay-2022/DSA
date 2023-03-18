function binarySearch(arr, left, right, x){
    console.log(arr, left, right, x)
	if (right >= left) {
		let mid = left + Math.floor((right - left) / 2);
		if (arr[mid] == x)
			return mid;
        if (arr[mid] > x){
            console.log("left",mid)
			return binarySearch(arr, left, mid - 1, x);
        } else{
            console.log("right",mid)
        return binarySearch(arr, mid + 1, right, x);
        }
	}
	return -1;
}
let arr = [ 2, 3, 4, 10, 17,26,37,42,59,62,78,84 ];
let x =78;
let n = arr.length
let result = binarySearch(arr, 0, n - 1, x);
if(result == -1)
   console.log( "Element is not present in array")
else
 console.log("Element is present at index " +result);
