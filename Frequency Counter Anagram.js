//Given 2 strings, WAP to determine if the 2nd string is an anagram of the 1st. An anagram is a word, phrase or name formed by rearranging the letters of another.
//Edge Cases: Everything is lowercase, no spaces, no symbols.
function anagram(st1, st2) {
    if(st1.length !== st2.length) {
    return false;
    }
    let count1 = {}
    let count2 = {}
    for(let char of st1){
    count1[char] =(count1[char] || 0)+1
    }
    for(let char of st2){
    count2[char] =(count2[char] || 0)+1
    }
    for(let key in count1){
    if(!(key in count2)){return false}
    if(count2[key] !== count1[key]){return false;}
    }
    return true
    }
    console.log(anagram(" "," "))
    console.log(anagram("texttwisttime", "timetexttwist"))
    console.log(anagram("hello","eloh"))