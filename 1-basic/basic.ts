let a: string; //this is type anotation
let n = 10; // no need to assign type age:number

a = 'vikash';

function add(a: number, b = 10) {
  return a + b;
}

console.log(add(10));

// Any type

let age: any = 18;

age = 'Vikash';
age = false;
age = {};
age = [];

//union type

let num: string | number | boolean = 'Vikash';
num = 10;
num = true;

// array types
let arr: string[] = ['Vikash', 'kumar'];

let users: (string | number)[];

users = ['vikash', 'kumar'];
users = [19, 10];
users = ['vikash', 10];
