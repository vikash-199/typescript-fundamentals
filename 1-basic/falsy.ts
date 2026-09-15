// ?? => Used when you want a fallback only for null or undefined.
let nameUser: string | null = null;

console.log(name ?? 'Guest'); // Guest

let count = 0;

console.log(count ?? 10); // 0

// OR || => Used when you want a fallback for any falsy value: false, 0, "", null, undefined, NaN

let c = 0;

console.log(c || 10);
// 10

let n = '';

console.log(n || 'Guest');
// Guest

// | => In TypeScript, | is used to say a variable can have multiple possible types.
let id: string | number;

id = '101'; // ✅
id = 101; // ✅
id = true; // ❌
