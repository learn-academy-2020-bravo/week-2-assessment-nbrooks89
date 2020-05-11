//  ASSESSMENT 2: Coding Practical Questions

// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.
//  Use the test variables provided.

var num1 = 15
//  Expected output: "15 is divisible by three"

var num2 = 0
// Expected output: "0 is divisible by three"

var num3 = -7
//  Expected output: "-7 is not divisble by three"

//create a function that takes in an argument
const div3 = (number) => {
   //create an if statement that uses the modulo operator to see if a number is divisible by three
    if( number % 3 === 0 ){
        return `${number} is divisible by three`
        }else{
            return `${number} is not divisible by three`
        }
    }
    //console log the function 
     console.log(div3(num1))
     console.log(div3(num2))
     console.log(div3(num3))


// --------------------2) Create a function that takes in the randomNouns variable and returns an array with all the words capitalized.

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
//  Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
    
//First you will declare a function that takes in an argument
    const nounCap = (array) => {
        //create a local variable that maps through the array
        let eachNoun = array.map(value =>{
            //capitalize the first index of each word
            //then connect it to the rest of the word with substring method
            return value[0].toUpperCase() + value.substring(1)
            })
            return eachNoun.join(" ")
            
         
        
    }
        console.log(nounCap(randomNouns))
    

// --------------------3) Create a function that takes in the mixedDataArray array and returns an array with ONLY NUMBERS sorted from least to greatest.

var mixedDataArray = [true, 8, "hello", 90, -8, null, 0, 46, 59, 107, "hey!"]
//  Expected output: [-8, 0, 8, 46, 59, 90, 107]

// declare a function that takes in an argument 
  const onlySortNumbs = (array) =>{
      //sort through each filter value to determine if the value is a string. you will use the type of 
      return array.filter(value => 
        typeof value === "number")
        // sort through numbers with .sort() from least to greatest
        .sort(function(a,b){return a-b})
      
    }
console.log(onlySortNumbs(mixedDataArray))



// --------------------4) Create a function that takes in a string and logs the index of the first vowel.

var vowelTester1 = "learn"
// // Expected output: 1
var vowelTester2 = "throw"
// // Expected output: 3
 
 
//  //declare a function that takes in an argument
 const indexFirstVowel = (string) => {
    //make  for loop to loop through all the letters
    for(let i = 0; i < string.length; i++){
        //make a variable  with all the vowels
        let vowels = "aeiou"
        //make a variable that tells the character based on the index
        let char = string.charAt(i)
        // make an if statement that uses indexOf() to tell yu the virst instance of a vowel 
        if ( vowels.indexOf(char.toLowerCase()) != -1 ){
            //return that index
           return i
        }
    }
}
        
    
   console.log(indexFirstVowel(vowelTester1))
 


// --------------------5) Create a function that takes three arguments - two numbers and a mathematical operation (+, -, *, /) and performs the given calculation. If the input tries to divide by 0, return: "Can't divide by 0!"

//define a function that takes in 3 arguments 
 const calculator = (number1,operator,number2) =>{
     //create an if/else statement that goes through each operator
     // if operator is "+" return
     if( operator === "+"){
         return number1 + number2
     // if operator is "-" return
     } else if ( operator === "-"){
        return number1 - number2
    // if operator is "*"return
     } else if ( operator === "*"){
        return number1 * number2
    // if operator is "/" return
     } else if (operator === "/" ){
         //create a nested if statement inside the "/" if statement to tell the user they cant divid 0
         if(number2 === 0){
            return "cant divide by 0!"
         }
        return number1 / number2 
     }  
     
 }

// Uncomment and use the following console logs to test your function
console.log(calculator(3, "*", 9))


console.log(calculator(16, "+", 3))
// Expected output: 19

console.log(calculator(89, "/", 0))
// Expected output: "Can't divide by 0!"
