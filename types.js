/**
 * * JavaScript has two types of data: Primitive and Reference.
 * ? Primitive data types are stored directly in memory,
 * ? while reference data types store a pointer to the data in memory.
 */

/**
 * * There are five primitive data types in JavaScript:
 * ? string
 * ? number
 * ? Boolean
 * ? null
 * ? undefined
 */

/**
 * * Javascript References
 * ? Function
 * ? Object
 * ? Array
 */

// * String
// var string = "I am primitive string"; //type string
// var string1 = String("I am also string"); //type sting
// var string2 = String(true); // "true"
// var string3 = new String("I am string"); // * type object

// console.log({
//   type: typeof string,
//   type1: typeof string1,
//   type2: typeof string2,
//   type3: typeof string3,
// });

// console.log(string2 === true);

// * Check anothe example

// let sum1 = "2+2"; //mostly use cases
// let sum2 = String("2+2"); // sometimes use it
// let sum3 = new String("2+2"); // ! we rarely use String as a constructor.
// // console.log({sum1: eval(sum1), sum2: eval(sum2), sum3: eval(sum3)})
// // console.log(sum1);
// console.log(eval(sum3.valueOf()));
// console.log(sum3.valueOf())

// * number
// let number1 = 100; //regular number assign
// let number2 = Number("100"); //convert string to number
// let number3 = Number(100); // number type
// let number4 = new Number(100); //number constructor

// console.log({
//   type1: typeof number1,
//   type2: typeof number2,
//   type3: typeof number3,
//   type4: typeof number4,
//   valuof: typeof number4.valueOf(),
// });

// * another conversion
// let number5 = Number("string");
// let number6 = Number(undefined);
// let number7 = Number(null);
// let number8 = Number(true);
// console.log({ number5, number6, number7, number8 });

// * boolean
// let isValid1 = true;
// let isValid2 = Boolean(false);
// let isValid3 = new Boolean(false);
// let check = (isValid) => {
//   console.log(typeof isValid);
//   if (isValid) console.log("its boolean true");
//   if (!isValid) console.log("it's boolean false");
// };
// // console.log(isValid1 === isValid3); //check hard type
// console.log(typeof !!isValid3);
// // check(isValid3);

// * null

// let null1 = 10+null;
// let null2 = 10+undefined;
// let null3 = null

// console.log({type1: typeof null1, type2: typeof null2, type2: typeof null3})

// console.log(null1, null2)

// * Use cases of null
// ? To represent an empty or unknown value
// ? To prevent errors when a variable is not initialized
// ? To make code more readable and maintainable

// // Assign null to a variable
// let myVar = null;

// // Check if a variable is null

// if (myVar === null) {
//   // Do something
// }

// // Use null to represent an empty object
// const myObject = {
//   name: null,
//   age: null,
// };

// * undefined
// undefined is the value given to a variable that have not been assigned a value.
// it can occure if an object's property doesn't exist or a fucntion has mising parameters.
// It is basically Javascitp's way of saying, "I can't find a value for this"

// let sum;

// console.log(sum); //ops! i don't have any value

// sum = 300;

// console.log(sum); //hurrah! I am have value
