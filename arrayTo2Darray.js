//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function arrayToGroup(arr, size){
    let newarray = [];
    while(arr.length){
        newarray.push(arr.splice(0,size))
    }
    return newarray
}
console.log(arrayToGroup([1,2,3,4,5,6,7,8,9],2))