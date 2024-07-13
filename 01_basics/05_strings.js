const name = "hello" //declares string
const age = 15
//console.log(name + age);//outdated syntax
//console.log(`Hello my name is ${name}, I am ${age} years old`); //modern syntax for string

let naav = new String("Virat")
//console.log(naav[0]);
//console.log(naav.toUpperCase());
//console.log(naav.charAt(3));
//console.log(naav.indexOf("t"));

let naam = naav.substring(0,3) //here value at 0 1 2 will be returned, 3 is ignored
//console.log(naam);
//console.log(naav.charAt(-1));//empty value
let newName = naav.slice(-5,2)
//console.log(newName);

let oldName = "         test       "
//console.log(oldName.trim());

let url = "www.google%20com" //browser changes spaces to garbage value (here %20)
console.log(url.replace("%20", ".")); 
console.log(url.includes("%20"));

let midName = "first-mid-last"
console.log(midName.split("-"));
