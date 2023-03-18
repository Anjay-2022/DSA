// let a ="was".split("")
// let b= "sawa".split("")
// console.log(a.sort())
// console.log(b.sort())

// let isAnagram =true
// for(i=0;i<a.length;i++){
//     if(a[i]!=b[i])
//        isAnagram = false
// }

// if(a.length == b.length){
//    if(isAnagram)
//    console.log("string is Anagram")
 
// } else 
// console.log("Strings are not anagram")


str1= ("anjay").toLocaleLowerCase().split(" ").sort().join()
str2= ("ANJAY").toLocaleLowerCase().split(" ").sort().join()
if  (str1===str2)
    console.log("Strings are Anagram")
else    console.log("Strings are NOT Anagram")    

