let a: string; //this is type anotation
let age = 10; // no need to assign type age:number

a = 'vikash';

function add(a: number, b = 10) {
  return a + b;
}

console.log(add(10));

console.log(add
