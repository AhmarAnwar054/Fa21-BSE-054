//length property
let myName  = "Ahmar Anwar"
console.log(myName.length)  //returns the length of a string or number of characters..

//Extracting Characters from String
//4 methods
console.log(myName.at(7));
console.log(myName.charAt(7));
console.log(myName[7]);
console.log(myName.charAt(myName.length-4))
console.log(myName.at(-4))

myName[0] = "a"

console.log(myName); //Gives no error, but does not work (as string is immutable)


//Extracting String Parts
//3 methods
console.log(myName.slice(-5));
console.log(myName.substring(0,5))
console.log(myName.substr(-5))

//Converting to Upper and Lower Case
console.log(myName.toLowerCase())
console.log(myName.toUpperCase());

//Joining two or more strings together
//2 methods
console.log("Muhammad".concat(" ",myName))
console.log("Muhammad"+" "+myName);
//removes whitespaces from  a string:
myString = "   SomeString   "
console.log(myString);
console.log(myString.trim());
console.log(myString.trimStart());
console.log(myString.trimEnd());

//String Padding
//2 methods
let myNumberInString = "5"
console.log(myNumberInString.padStart(4,"0"));    
console.log(myNumberInString.padEnd(4,"0"));  
let myNumber = 5
console.log(myNumber.toString().padEnd(2,"$"));

//String Repeat
console.log(myNumberInString.repeat(5));

//Replacing String Content
console.log(myName.replace("Ahmar","Umar"));
     
//Regular Expression with the flag /g(global match)
let anotherString = "Hello Sir Ali and Sir Salman"
console.log(anotherString.replace(/Sir/g,"Mr."));


//Converting a 