// WORD FREQUENCY ANALYZER
function wordFrequencyAnalyzer(paragraph) {

  const cleanText = paragraph
    .replace(/[^\w\s]/g, '') 
    .toLowerCase();          

  const words = cleanText.split(/\s+/); 

  const frequency = {};

  for (const word of words) {
    if (word) {
      frequency[word] = (frequency[word] || 0) + 1;
    }
  }

  return frequency;
}

const paragraph = "India is a very big country india have four hero . 1st hero nishant 2nd hero gillu 3rd hero vishal 4 th hero raman india loves india?";
console.log(wordFrequencyAnalyzer(paragraph));


// GROUPING OBJECT BY PROPERTY
const employees = [
  { name: "NISHANT", department: "NOTHING", salary: 10 },
  { name: "VISHAL", department: "NOTHING", salary: 20 },
  { name: "GILLU BHAIYA", department: "CEO", salary: 3500000 },
  { name: "NIKHIL BHAIYA ", department: "CEO", salary: 100000 },
  { name: "TUSAR BHAIYA", department: "CEO",  salary :50000 }
];


function onlyDepartment(employees) {
  const result = {};

  for (let i = 0; i < employees.length; i++) {
    const emp = employees[i];
    const dept = emp.department;
    const name = emp.name;

    if (result[dept]) {
      result[dept].push(name);
    } else {
      result[dept] = [name];
    }
  }

  return result;
}
const myneed = onlyDepartment(employees);
console.log(myneed);

// Array Intersection Without Duplicates
function intersection(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];
    if (arr2.includes(item) && !result.includes(item)) {
      result.push(item);
    }
  }

  return result;
}


let arr1 = [1, 2, 2, 3, 4];
let arr2 = [2, 3, 5];

const common = intersection(arr1, arr2);
console.log(common); 


//4

function isPalindrome(str) {
  const cleanStr = str
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

  const reversedStr = cleanStr.split('').reverse().join('');

  return cleanStr === reversedStr;
}

console.log(isPalindrome("Was it a car or a cat I saw")); 
console.log(isPalindrome("hello world")); 
console.log(isPalindrome("I love you uoy evol i"));

//5
function searchNested(obj, targetKey) {
  for (const key in obj) {
    if (key === targetKey) {
      return obj[key];
    }

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      const result = searchNested(obj[key], targetKey);
      if (result !== null) {
        return result;
      }
    }
  }
  return null;
}

const myObject = {
  user: {
    name: "nishant",
    address: {
      city: "hajipur",
      extra: {
        pin: 844101
      }
    }
  }
};

console.log(searchNested(myObject, "pin"));       
console.log(searchNested(myObject, "city"));      
console.log(searchNested(myObject, "country")); 


//  SHOPPING CART TOTAL
function discountPrice(cart) {
   let total = 0 ;

   for (let item of cart) {
    let itemTotal = item.quantity*item.price;

    if (item.quantity > 5) {
      itemTotal*= 0.9;
    }
    total+=itemTotal;
   }
   return total;
}

const myCart = [
  { item: "Bat", quantity: 4,price :6 },
  { item: "bowl",quantity: 6 ,price :2 },
  { item:"stump", quantity: 2, price: 3 }
]
 const finalCost = discountPrice (myCart);
 console.log("finalCost",finalCost);


//Unique character
 function countUniqueChars (str){
  str = str.toLowerCase()
  .replace(/\s/g,'');

  const uniqueChars = new Set();

  for (let char of str) {
    uniqueChars.add(char);
  }
  return uniqueChars.size;  
 }

const value = "vishal bharua";
const uniqueCount = countUniqueChars(value);

console.log("unique characters:", uniqueCount);








