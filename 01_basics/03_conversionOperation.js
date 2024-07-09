let score = 33
//console.log(typeof score);

let score2 = "33"
//console.log(typeof score2);

let valueInNum = Number(score2)
//console.log(typeof valueInNum); //js converted string into number (string is a number)

let score3 = "33abc"
//console.log(typeof score3);

let valueInNum2 = Number(score3)
//console.log(typeof valueInNum2);
//console.log(valueInNum2); //js converts string to NaN when converted to number (string is num+string)

let score4 = null
//console.log(typeof score4);

let valueInNum3 = Number(score4)
//console.log(typeof valueInNum3);
//console.log(valueInNum3); //js converts null into 0 when converted to number

let answer = true
//console.log(typeof answer);
let valueInNum4 = Number(answer)
//console.log(typeof valueInNum4);
//console.log(valueInNum4); //js converts boolean values into 1(true)/0(false)

let isLoggedIn = 1
//console.log(typeof isLoggedIn);
//console.log(isLoggedIn);

let boolValue = Boolean(isLoggedIn)
//console.log(typeof boolValue);
//console.log(boolValue);

let isLoggedOff = "a"
//console.log(typeof isLoggedOff);
//console.log(isLoggedOff);

let boolValue2 = Boolean(isLoggedOff)
//console.log(typeof boolValue2);
//console.log(boolValue2); //js converts empty string into false and any string into true

//-----------------------Operations------------------------

let value = 1
let negValue = -value
//console.log(negValue);

//console.log(2*2); //multiplication
//console.log(2**2); //2^2

let str1 = "hello"
let str2 = " world"
//console.log(str1 + str2);

console.log(1+"2"); //prints 12
console.log("1"+2); //prints 12
console.log("1"+2+2); // prints 122 (if first element is string everything acts as a string)
console.log(1+2+"2"); //prints 32 (if first elements are number it adds them and prints string at last)