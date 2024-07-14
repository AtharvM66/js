const score = 100;
//console.log(score);

const balance = new Number(400)
//console.log(balance);
//console.log(balance.toString().length); //transforms into string and then return length
//console.log(balance.toFixed(2)); //will return the value with 2 fixed decimal places

let otherNum = 13.6784935
//console.log(otherNum.toFixed(2)); //will return 2 places after the decimal, here 13.68
//console.log(otherNum.toPrecision(3));//returns exactly number of digits entered, here will return 13.7 which are 3 digits

let Num = 1000000000000000000
//console.log(Num.toLocaleString('en-IN')); // will return commas according to INR, by default is US

///////////////////////////////////Maths//////////////////////////////////////////

// console.log(Math.PI);
// console.log(Math.abs(-4)); //absolute value
// console.log(Math.round(4.5));//round off value
// console.log(Math.ceil(4.2)); //ceiling value, here 5
// console.log(Math.floor(4.9)); //floor value, here 4
// console.log(Math.min(3,2,1,5)); //will find min value

//console.log(Math.random()); //will give random value between 0 and 1

console.log(Math.round((Math.random()*10)+41));
