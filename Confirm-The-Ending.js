function confirmTheEnd(str, target){
return str.slice(str.length-target.length) === target
}
console.log(confirmTheEnd("Walking on water and developing software from a specification are easy if both are frozen", "specification"))
console.log(confirmTheEnd("Congratulation", "on"))

