let arr = [4,2,6,0]
let n = arr.length
for (i = 0; i < n; i++){
    temp=arr[i]
    j=i-1
    while(j>=0 && arr[j]>temp){
        arr[j+1]=arr[j]
        j--
    }
    arr[j+1]=temp
}
console.log("Insertion  Sort:-",arr)