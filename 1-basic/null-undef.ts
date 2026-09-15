//undefined → a value is not assigned / missing
//null → we intentionally say there is no value

let userName: string | undefined;

console.log(userName); // undefined but username exist

let user: string | null = null;
console.log(user);
