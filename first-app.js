// var name = "max"; // if using var, if we want to define again or overwrite, value can change but its outdated
// let age = 39; // if using let, value can change if we want to define or iverwrite the variable again
// const hasHobbies = true; // if using const, value can not change if we want to define or overwrite same variable

// name = "maxilian";
// age = 30;
// // hasHobbies = false;

// const summarizeUser = (userName, userAge, userHasHobby) => {
//   return (
//     "Name is " +
//     userName +
//     ", age is " +
//     userAge +
//     " and the user has hobbies : " +
//     userHasHobby
//   );
// };

// console.log(summarizeUser(name, age, hasHobbies));

// const person = {
//   name: "Max",
//   age: 29,
//   greet() {
//     console.log("Hi I am " + this.name);
//   },
// };

// person.greet()

function main(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 == 0) {
      console.log("Fizz Buzz");
    } else if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

main(15);


