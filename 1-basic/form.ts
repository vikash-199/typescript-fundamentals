/*
const inputEle = document.getElementById('user-name')!; //First method=>I know this element exists. Don't consider null here. TypeScript treats it approximately as HTMLElement

//2nd method
// if (!inputEle) {
//   throw new Error('Element not found');
// }

console.log(inputEle.value);
console.log(inputEle?.value); //inputEle is null do not look for value

*/

const inputEle = document.getElementById(
  'user-name',
) as HTMLInputElement | null;

console.log(inputEle?.value);
