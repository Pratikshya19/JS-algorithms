//WAP called same which accepts two arrays. The function should return true if every value in the array has it's corresponding values squared in the second array. The frequency of values must be same.
//Solution: 1. Check length
//2. Initialize counter1 and counter2 empty object variables to store the key as element of arrays and value as its count
//3.Loop over arrays, store key as element as value as its count in that array.
//4.Loop over the counter1 to check if the key in arr1 = square of key in arr2
//5. Check if 
function same(arr1, arr2){
if(arr1.length !== arr2.length){
    return false;
}
let counter1 = {};
let counter2 = {};
for(let val of arr1){
    counter1[val] = (counter1[val] || 0)+1
}
for(let val of arr2){
    counter2[val] = (counter2[val] || 0)+1
}
for(let key in counter1){
    if(!(key**2 in counter2)){
        return false;
    }
    if(counter2[key**2] !== counter1[key])//checking values in bothsides are equal.
    return false;
}
return true
}
console.log(same([1,2,3,4],[1,4,9,16]))
