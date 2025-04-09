// two number//


function Add(a,b) {
  let c = a+b;
  return  c ;
}
console.log(Add(10,20));

//convert celsius to fahrenheit//
function ctof(celsius) {
  fahrenheit = (celsius * 9/5) +32;
  return fahrenheit;
  
}
console.log(ctof(0));
// maximum between two nos//
function max(a,b) {
  if (a>b){
    return a; 
  } else {
    return b ;
  } 
}
console.log (max(50,70));
//even or odd//
function OddOrEven(num){
  if ( num % 2===0) {
    return "even" ;
  } else { 
    return  "odd" ;
  }
}
  console.log(OddOrEven(12));
  console.log(OddOrEven(15));
  // factorial//
    

//  Reverse String /
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

// Count Vowels in a string //

function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
console.log(countVowels("javascript")); 

// Check if a String is a Palindrome //

function isPalindrome(str) {
    let reversed = str.split('').reverse().join('');
    return str === reversed;
}
console.log(isPalindrome("madam")); // Output: true


// Generate a Random Number Between a Range //

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(randomNumber(1, 10)); 

// Capitalize the First Letter of Each Word //

function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalizeWords("nishant raj singh vishal pagal")); 














