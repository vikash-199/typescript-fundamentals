//optinal parameters
function getError(msg?: string) {
  throw new Error(msg);
}

getError();

type User = {
  name: string;
  age: number;
  role?: 'admin' | 'guest';
};

let u1: User = {
  name: 'Vikash',
  age: 80,
};

let u2: User = {
  name: 'Vikash',
  age: 80,
  role: 'guest',
};
