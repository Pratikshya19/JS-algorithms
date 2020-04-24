function FirstNonRepeatingStr(s){
    for(var i=0; i<s.length; i++){
        if(s.indexOf(s.charAt(i)) === s.lastIndexOf(s.charAt(i))){
return s[i]
        }
    }
    return null
}
// function NonRepeatingStr(str){
// for(var i in str){
//    if(str.match(new RegExp(str[i],"gi")).length === 1){
//     return str[i] 
//    }
// }
// return null
// }
console.log(FirstNonRepeatingStr("I love to code")) //I
console.log(FirstNonRepeatingStr("hello hi world")) //e