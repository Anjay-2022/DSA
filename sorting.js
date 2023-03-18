// let arr = [4,2,6,0]
// let n = arr.length
// console.log(n)
// var i, j, temp;
// var swapped;
// for (i = 0; i < n; i++) {
//     swapped = false;
//     for (j = 0; j < n - i; j++) {
//         if (arr[j] > arr[j + 1]) {
//             temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//             swapped = true;
//         }
//     } if (swapped == false)
//         break;
// }
// console.log("Bubble Sort:-",arr)





// for (i = 0; i <= n; i++) {
//     min = i;
//     for (j = i + 1; j <= n; j++) 
//         if (arr[j] < arr[min])
//             min = j;
//     if (min != i) {
//         temp = arr[min];
//         arr[min] = arr[i];
//         arr[i] = temp;
//     }
// }
// console.log("Selection  Sort:-", arr)





// for (i = 0; i < n; i++){
//     temp=arr[i]
//     j=i-1
//     while(j>=0 && arr[j]>temp){
//         arr[j+1]=arr[j]
//         j--
//     }
//     arr[j+1]=temp
// }
// console.log("Insertion  Sort:-",arr)



function mergeSort(array,half = array.length/2){
   console.log("array is :",array," length is :",half)
    if(array.length < 2){
      return array
    }
  
    const left = array.splice(0,half); //left part of array
    console.log("left",left)
    return merger(mergeSort(left),mergeSort(array))
  }
  
  function merger(left,right){
    console.log(" merger sort left :",left,"right : ",right)
    const arr = [];
  
    while(left.length && right.length){
      if(left[0] < right [0]){
        arr.push(left.shift())
      }else{
        arr.push(right.shift())             
      }
       }
  
    return [...arr,...left,...right];
  }
  console.log(mergeSort([4,0,6,2]));


// function Quicksort(array){
//     if (array.length < 2){
//        return array;
//     }
//     let pivot_element = array[array.length - 1]
//     console.log(pivot_element)
//     let left_sub_array = [];
//     let right_sub_array = [];
//     for (let i = 0; i < array.length - 1; i++){
//        if (array[i] < pivot_element) {
//           left_sub_array.push(array[i])
//        } else {
//           right_sub_array.push(array[i])
//        }
//     }                         0,1    ,              3                ,     4,10
//     return [...Quicksort(left_sub_array), pivot_element, ...Quicksort(right_sub_array)];
//  }
//  const array = [0, 10, 4, 1, 3];
//  console.log(Quicksort(array));


