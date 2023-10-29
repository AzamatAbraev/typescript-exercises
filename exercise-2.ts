// ----- Exercise1 ----- //

// let n: number = 5;

// function getSum(n: number): number {
//   let sum: number = 0;
//   for (let i = 1; i <= n; i++) {
//     if (i % 2 > 0) {
//       sum += i * (i % 2)
//     } else {
//       sum += i * i;
//     }
//   }
//   return sum;
// }

// let response: number = getSum(n);
// console.log(response);

// ----- Exercise2 ----- //

// let arr: string[] = ["Abdulaziz", "Murod", "Yulduz", "Abdug'affor", "Jamila"];

// function getLongestWord(input: string[]): string {
//   let longestString: string = input[0];
//   for (let el of input) {
//     if (el.length > longestString.length) {
//       longestString = el;
//     }
//   }

//   return longestString;
// }

// let response: string = getLongestWord(arr);
// console.log(response);

// ----- Exercise3 ----- //

// let arr: number[] = [2, 5, 7, 10, 0, 18, 15];

// let n: number = 5;

// function getDividers(input: number[]): number[] {
//   let dividers: number[] = [];
//   for (let el of input) {
//     if (el % n == 0) {
//       dividers.push(el)
//     }
//   }

//   return dividers;
// }

// let response: number[] = getDividers(arr);
// console.log(response);

// ----- Exercise4 ----- //

// let str: string = "Abdulaziz Programmer Is FullStack Developer";

// function checkWordCapitalize(input: string) {
//   let strArr: string[] = input.split(" ");
//   for (let el of strArr) {
//     if (el.charAt(0) !== el.charAt(0).toUpperCase()) {
//       return false;
//     }
//   }

//   return true;
// }

// let response = checkWordCapitalize(str);
// console.log(response);

// ----- Exercise5 ----- //

// let str: string = "Abdulaziz Programmer";

// function getCharCountObj(input: string): { [key: string]: number } {
//   let letters: string[] = input.split("");
//   let obj: { [key: string]: number } = {};

//   for (let el of letters) {
//     if (!obj[el]) {
//       obj[el] = 0;
//     }
//     obj[el]++;
//   }

//   return obj;
// }

// let response = getCharCountObj(str);
// console.log(response);

// ----- Exercise6 ----- //

// let obj: {[key: string]: number} = { a: 1, b: 2, c: 3 };

// function changeObjToString(input: { [key: string]: number }): string {
//   let keys: string[] = Object.keys(input);
//   let finalStr: string = "";
//   for (let key of keys) {
//     finalStr += key + input[key];
//   }
//   return finalStr;
// }

// let response: string = changeObjToString(obj);
// console.log(response);

// ----- Exercise7 ----- //

// const products: {id: number, name: string, price: number}[] = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "TV", price: 400 },
//   { id: 3, name: "Album", price: 800 },
//   { id: 4, name: "Book", price: 600 },
//   { id: 5, name: "Phone", price: 500 },
//   { id: 6, name: "Computer", price: 1000 },
//   { id: 7, name: "Skate", price: 300 },
//   { id: 8, name: "Keyboard", price: 200 },
//   { id: 9, name: "Bottle", price: 700 },
// ];

// function deleteProducts(...rest: number[]) {
//   let newProducts: { id: number; name: string; price: number }[] = [];
//   for (let product of products) {
//     if (rest.includes(product.id)) {
//       newProducts = products.filter((item) => !rest.includes(item.id))
//     }
//   }

//   return newProducts;
// }

// let response = deleteProducts(1, 4, 6);
// console.log(response);

// ----- Exercise8 ----- //

// interface objType {
//   id: number;
//   name: string;
//   price: number;
// }

// const products: objType[] = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "TV", price: 400 },
//   { id: 3, name: "Album", price: 800 },
//   { id: 4, name: "Book", price: 600 },
//   { id: 5, name: "Phone", price: 500 },
//   { id: 6, name: "Computer", price: 1000 },
//   { id: 7, name: "Skate", price: 300 },
//   { id: 8, name: "Keyboard", price: 200 },
//   { id: 9, name: "Bottle", price: 700 },
// ];

// function increaseProductPrice(
//   arr: objType[],
//   id: number,
//   percentage: number
// ): objType[] {
//   let newArr: objType[] = [];
//   for (let el of arr) {
//     if (el.id === id) {
//       el.price = el.price * (1 + (percentage / 100));
//     }
//     newArr.push(el)
//   } 

//   return newArr;
// }

// let response = increaseProductPrice(products, 5, 30);
// console.log(response);



// ----- Exercise9 ----- //


// interface String {
//   count(char: string): number;
// }


// String.prototype.count = function(
//   this: string,
//   char: string
// ): number {
//   let count: number = 0;
//   for (const c of this) {
//     if (c === char) {
//       count++;
//     }
//   }
//   return count;
// };

// let str = "Abdulaziz Programmer";
// let count = str.count('a');

// console.log(count);

// ----- Exercise10 ----- //


// class Employee {
//   firstName: string;
//   lastName: string;
//   workPlace: string;
//   salary: number;
//   percent: number;
//   isFullTime: boolean;

//   constructor(
//     firstName: string,
//     lastName: string,
//     workPlace: string,
//     salary: number,
//     percent: number,
//     isFullTime: boolean
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.workPlace = workPlace;
//     this.salary = salary;
//     this.percent = percent;
//     this.isFullTime = isFullTime;
//   }

//   getInfo(): string {
//     let fullTimePartTime = this.isFullTime ? "full-time" : "part-time";
//     let bonus = (this.salary * this.percent) / 100;
//     let totalSalary = this.salary + bonus;

//     return `${this.firstName} ${this.lastName} ${this.workPlace}da ${totalSalary}$ oylik evaziga ${fullTimePartTime} ishlaydi.`;
//   }
// }

// let emp1 = new Employee(
//   "Abdulaziz",
//   "Programmer",
//   "Najot ta'lim",
//   10000,
//   20,
//   false
// );
// let emp2 = new Employee(
//   "Abdulaziz",
//   "Programmer",
//   "Najot ta'lim",
//   5000,
//   40,
//   true
// );

// let emp1Info = emp1.getInfo();
// let emp2Info = emp2.getInfo();

// console.log(emp1Info);
// console.log(emp2Info);


