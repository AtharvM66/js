//Primitive (call by value)
// Number, String, Boolean, null, undefined, Symbol, BigInt

//js is dynamically typed language, as it declares variable in runtime

const id = Symbol("123")
const id2 = Symbol("123")
//console.log(id == id2);

const bigNumber = 123456789012345678901234567890n //n at the end declares it as BigInt
//Non-primitive (call by reference)
//Array, Object, Function

const heroes = ["shaktiman", "gangadhar"]

let testObj = {
    name: "hello",
    age: 16
}

let testFunc = function(){
    console.log("Hello World");
}

////////////////////Memory///////////////////////////////
//=>Stack (used in primitive datatypes), Heap(non-primitive datatypes)

let channelName = "helloyt"

let otherChannel = channelName
//console.log(otherChannel);
otherChannel = "byeworld"
//console.log(channelName);
//console.log(otherChannel); //for primitive datatypes the memory is stored in stack, so original value does not change

let userOne = {
    email: "a@gmail.com",
    name: "a"
}

let userTwo = userOne
userTwo.email = "b@gmail.com"
console.log(userTwo);
console.log(userOne); //as the memory is stored in heap for non-primitive datatype, the original value also changes