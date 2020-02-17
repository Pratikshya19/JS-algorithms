function findLongestWordLength(string){
    var word = string.split(" ");
  var max = 0;
   for (let i=0; i < word.length; i++){
      if (word[i].length>max){
        max = word[i].length
      }
    }
    return max;
  }
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
  //Take string and convert into array of words
  //Variable to track max length
  //loop over each array of words
  //compare the current word to previous one 
  //return max
  