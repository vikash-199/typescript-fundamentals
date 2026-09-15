function add(a: number, b: number): number {
  return a + b;
}

// void
function log(msg: string) {
  console.log(msg);
}

//void means a function completes its execution without returning a value, whereas never means the function never completes normally, usually because it always throws an error or runs indefinitely.
function throwError(): never {
  throw new Error('Something went wrong');
}

// fn as parameter
const logMsg = (msg: string) => {
  console.log(msg);
};
function add1(msg: string) {
  console.log(msg);
}

function performJob(fnc: (msg: string) => void) {
  fnc('Hello from msg');
}

performJob(logMsg);
performJob(add1);
