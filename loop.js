//print the number from 1 to 10//
for (let i = 1 ; i <= 10 ; i++ ) {
    console.log(i);
}
//print the even  number between 1 to 20//
for ( let p = 2; p <= 20; p = p  + 2) {
    console.log(p);
}
// find the sum of all numbers from 1 to 100//
let add  = 0
for (let i = 1; i<= 100 ; i++) {
        add   =  add + i }
console.log("sum:", add );
//print the multiplication table of 5 up to 10//
let table = 0
for (let i = 1; i<=10; i++){
    multiple = 5*i
console.log("table:", multiple)}
//Reverse a given string using  a for loop//
 let  str = "vishal  pagla ";
 let reversed = "";
 for ( let i = str.length - 1 ; i >= 0; i --) {
    reversed = reversed + str[i];
 }
 console.log("reversed string:", reversed );
// for in loop//
const obj = {
    name : "vishal",
    age : 27,
    eyeColor :"green" ,
    hobby : "circket"
};
//loop through the properties and print each key//
for (let key in obj) { 
    console.log ("key:", key);
}
//loop through and print key -value pairs//
for (let key in obj) {
    console.log( "key:",(obj[key]));
}
//count the number of properties//
let count = 0;
for ( let key in obj ) {
    count++;
}
console.log("properties:", count);
// convert all the values to uppercase if they are string//\
for (let key in obj ) {
    if ( typeof obj[key] === "string") {
        obj[key] = obj [key].toUpperCase();
    }
}
console.log("new object:",obj);

//for   of loop //
//print each element in a array of the number//
let numbers = [3,6,9,12,15];
for (let num of numbers) {
    console.log(num);
}
// find the sum of the element in a aaray//
let sum = 0
for ( let num of numbers) {
    sum = sum+ num;
}
console.log ("sum:",sum);
// print all characters in a string using for of loop//
let string = "NISHANT RAJ"
for (let char of string) {
    console.log(char);
}
//create a new aRRAY WITH THE SQUARE OF THE Each NUMBER IN ARRAY//
let square = []
for (let num of numbers) {
    square.push = num *num 
console.log("squares:", square);
}
// while loop//
// print numbers from 1 to 10  using while loop//
let i = 1 ;
while ( i<=10) {
     console.log (i);
    i++
}
// factorial of the nos//
let num = 5
let fact = 1;  
let n = num; 
while (n > 0) { 
    fact *= n;  
    n--;  
}
console.log("Factorial of " + num + " is " + fact);

// reverse a NUMBER //
let num5 = 12345
let reversed5 = 0;
while (num5 !== 0) {
    let digit = num5 % 10;       
    reversed5 = reversed5 * 10 + digit; 
    num5 = Math.floor(num5 / 10);
}
console.log("Reversed number is: " + reversed5)
// fibonaccia series//
let limit = 15
let a = 0 , b = 1;
console.log ("fibonacci series:");
while (a <= limit) {
    console.log(a);
    let tem = a+b ;
    a=b;
    b = tem;
}
 // number of digit//
 let num7 = 123456789;
 let count2 = 0;
 let nishant = num7;
 while(nishant>0) {
    nishant = Math.floor(nishant/10);
    count2++;
 }
console.log("number of digit"+ num7 + "is"+  count2);
// do while loop//
// print  number from 1 to 10 //
let c = 1;
do {
    console.log(c);
    c++
}while (c<=10);
// multiplication table of a number//
let num6 = 10;
let  d =1;
do {
    console.log(num6 * d );
    d++;
}
while(d<=10);
