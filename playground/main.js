// dynamic programming language

//primitive data types - string , integer , float , booleans , undefined , null

// let name = "Harsh";
// let lastName = "Rai";
// const age = 20;
// let pass = true;
// let marks = 80;

// let marks2 = marks;

// //now the marks is =  80

// marks2 = marks2 / 100; //0.8

// console.log("Original marks", marks, "Duplicate marks", marks2);

//Pass by reference data types

// let results = [10, 20, 30, 40, "something"];
// let sum = results[0] + results[3];

// //sum = 50
// sum = results[0] + results[4];

// //sum= 10something
// console.log("The sum is " + sum);

//JSON - Java Script Object Notation

// let bioData = {
//   name: "Harsh",
//   lastName: "Rai",
//   age: 20,
//   marks: {
//     english: 70,
//     maths: 80,
//     history: 90,
//   },
// };

// let bioData2 = Object.assign(
//   { favoriteSubject: "Programming", pass: true },
//   bioData
// );

// bioData2.name = "Somename";

// console.log("Biodata 1", bioData);

// console.log("Biodata 2", bioData2);

// console.log(bioData.name, bioData.lastName, bioData.age , bioData.marks);

//Functions

// let division = function (a, b) {
//   return a / b;
// };

// let multiplier = function (div, a, b) {
//   let divisionResult = division(a, b);
//   return a * b * divisionResult;
// };

// console.log(multiplier(division, 20, 10));

const getSample = async function () {
  const req = await fetch("https://jsonplaceholder.typicode.com/todos/1");

  let response = await req.json();

  console.log("This is the response", response);
  return response;
};

getSample();
