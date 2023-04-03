function isPalindrome(word) {
  // Write your algorithm here
  const string1 = word;
  const string2 = reverseString(word);
  var length = word.length;
  // console.log('this is string1: '+string1);
  // console.log('this is string2: '+string2);
  
  if (string1==string2)
  {
    return true;
  }
  else
  {
    return false;
  }
}

function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); 

    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); 
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); 
    
    //Step 4. Return the reversed string
    return joinArray; 
}


/* 
  Add your pseudocode here
  string1 = argument
  string2 = reverseArgument

  if argument = reverseArgument then string is palindrome
  else it is not 
*/

/*
  Add written explanation of your solution here
  I figured spliting the string to an array and then reversing it would be the most efficient way to solve this code.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;