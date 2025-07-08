// const value = require('./math');


// // console.log(value);

// console.log(value.g);
// console.log(value.pi);
// console.log(value.sum(3,4));
// console.log(value.mul(3,4));


// const info = require("./Fruits");

// console.log(info);


// let figlet = require("figlet");

// figlet("ashesh gupta", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });



import { sum, pi } from "./math.js";
import { generate } from "random-words";


// console.log(sum(3,4));
// console.log(pi);

console.log(generate());