/**
 * * Type coercion in javascript 
 * ? Type coercion is the process of converting the type of a value in the background to try and make an operation work. 
 * ? It's an implicite coercion. Implicit coercion occurs when JavaScript automatically converts one data type to another without the developer explicitly requesting it. 
 * ? It happens behind the scenes, often leading to unexpected outcomes if not handled properly.
 */

/**
 * * Explicite Coercion
 * ? On the other hand, explicit coercion refers to situations where the developer explicitly converts a value from one type to another 
 * ? using built-in functions or operators like Number(), String(), or Boolean().
 */

/**
 * * Example
 */
// ? First multiply a string with number

// let string = "34";
// let multiply  =  10 * string;

// console.log(multiply);

// ! this may seems useful, but the process is not always logical or consistent, causing a lot of confusion. 

// ? Second Add a string with number

// let add = 56+"45"; //in this case it will concate the number and string together

// console.log(add);

// const value1 = "5";
// const value2 = 9;
// let sum = Number(value1)+value2;

// console.log(sum);

//! so you should always try to be very explicite about the types of values you are woking with.


// * Here is an another example.

let hello = "JavaScript";
let check = Boolean(hello);

console.log(check); //true

// ? In this case, JavaScript coerces the string "JavaScript" into a boolean value. 
// ? Since the string is not empty, it is considered truthy, resulting in the output true.

