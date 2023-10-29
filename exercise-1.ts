// --- 3.10 Exam Exercises --- //

// --- Exercise1 --- //

// function getSum(n: number): number {
//   let oddNumbers: number = 1;
//   let evenNumbers: number = 1;
//   for (let i:number = 1; i <= n * 2; i++) {
//     if (i % 2 == 0) {
//       evenNumbers *= i;
//     } else {
//       oddNumbers *= i;
//     }
//   }

//   return oddNumbers + evenNumbers;
// }

// let response = getSum(3);
// console.log(response);

// --- Exercise2 --- //

// let arr: number[] = [1589, 31851, 512, 180975, 78];

// function getHighestNumberOfDigits(input: number[]): number {
//   let highest: number = arr[0];
//   for (let el of input) {
//     if (el > highest) {
//       highest = el;
//     }
//   }
//   return highest;
// }

// let response = getHighestNumberOfDigits(arr);
// console.log(response);

// --- Exercise3 --- //

// let arr: any[] = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}]

// function getStringArr(input: any[]): string[] {
//   let stringArr: string[] = [];
//   for (let el of input) {
//     if (typeof el === "string") {
//       stringArr.push(el)
//     }
//   }

//   return stringArr;
// }

// let response = getStringArr(arr);
// console.log(response);

// --- Exercise4 --- //

// let str: string = "Hello! How are you? I'm doing great. What's new?"
// const punctuationSigns = ['!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~', "'"];

// function getNumberOfPunctuations(input: string):number {
//   let count: number = 0;
//   for (let el of input) {
//     if (punctuationSigns.includes(el)) {
//       count++;
//     }
//   }

//   return count;
// }

// let response = getNumberOfPunctuations(str);
// console.log(response);

// --- Exercise5 --- //

// let str: string = "Azamat Abraev";

// function switchLetters(input: string): string {
//   let newStr: string = "";
//   for (let el of input) {
//     if (el === el.toLowerCase()) {
//       newStr += el.toUpperCase();
//     } else {
//       newStr += el.toLowerCase();
//     }
//   }
//   return newStr;
// }

// let response: string = switchLetters(str);
// console.log(response);

// --- Exercise6 --- //

// interface objectStringNumber {
//   [key: string]: number;
// }

// let obj: objectStringNumber = { a: 1, b: 2, c: 3 };

// function changeObjToArr(input: objectStringNumber): string[] {
//   let finalRes: string[] = [];
//   let keys: string[] = Object.keys(input);

//   for (let key of keys) {
//     finalRes.push(key + input[key])
//   }
//   return finalRes;
// }

// let response: string[] = changeObjToArr(obj);
// console.log(response);

// --- Exercise7 --- //


// interface objectStringBool {
//   name: string, isGrant: boolean
// }

// let students: (objectStringBool)[] = [
//   { name: "Jurabek", isGrant: false },
//   { name: "Elbek", isGrant: true },
//   { name: "Shamshod", isGrant: false },
//   { name: "Kamola", isGrant: false },
//   { name: "Gulnoza", isGrant: true },
//   { name: "Savlatbek", isGrant: false },
// ];

// function seperateStudents(input: objectStringBool[]): object {
//   let grantStudents: string[] = [];
//   let contractStudents: string[] = [];

//   for (let student of input) {
//     if (student.isGrant) {
//       grantStudents.push(student.name);
//     } else {
//       contractStudents.push(student.name);
//     }
//   }
//   return {
//     grant: grantStudents,
//     contract: contractStudents,
//   };
// }

// let response: object = seperateStudents(students);
// console.log(response);


// --- Exercise8 --- //

// interface objectType {
//   name: string, pages: number, isReadFinished: boolean
// }

// const books: objectType[] = [
//   { name: "The Great Gatsby", pages: 180, isReadFinished: true },
//   { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
//   { name: "Atom habits", pages: 328, isReadFinished: true },
//   { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
//   { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
//   { name: "The Hobbit", pages: 310, isReadFinished: false },
//   { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
//   { name: "Harry Potter", pages: 320, isReadFinished: true },
//   { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
//   { name: "To the Lighthouse", pages: 209, isReadFinished: true },
// ];

// function getTotalPages(input: objectType[]): number {
//   let total: number = 0;
//   for (let el of input) {
//     if (el.isReadFinished) {
//       total += el.pages
//     }
//   }
//   return total;
// }

// let response: number = getTotalPages(books);
// console.log(response);



// --- Exercise9 --- //

// Object.prototype.keys = function() {

// }

// let obj = { a: 1, b: 2, c: 3 };

// console.log(obj.keys());


// --- Exercise10 --- //

// interface Student {
//   firstName: string;
//   lastName: string;
//   university: string;
//   course: number;
//   totalYears: number;
//   isGrant: boolean;

//   getInfo(): string;
// }

// class Student {
//   constructor(
//     public firstName: string,
//     public lastName: string,
//     public university: string,
//     public course: number,
//     public totalYears: number,
//     public isGrant: boolean,
//   ) {}

//   getInfo(): string {
//     let status = this.isGrant ? "grant asosida" : "to'lov asosida";
//     let yearsLeft = this.totalYears - this.course;

//     return `"${this.firstName} ${this.lastName} ${this.university} universitetida ${this.course}-kursda ${status} o'qiydi. ${yearsLeft} yildan keyin universitetidan qutuladi."`;
//   }
// }

// let student = new Student("Abdulaziz", "Programmer", "TATU", 3, 4, true);

// console.log(student.getInfo());
// console.log(student.firstName);










