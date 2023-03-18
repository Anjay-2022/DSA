for(let i = 1;i<=5;i++){
    let str = " "
    for(let j = 5-i;j>=1;j--)
       str+=" "
    for(let k = 1;k<=i;k++)
          str+="*"
    for(let l = 2;l<=i;l++)
           str+="*" 
    console.log(str)       
 }