// Object type

//In TypeScript, a type is used to define the shape/type of data a variable, function parameter, or object can have.

let user: { name: string; age: number } = {
  name: 'Vikash',
  age: 20,
};

// OR
type User = {
  name: string;
  age: number | string;
  hobbies: string[];
  role: {
    description: string;
    id: number;
  };
};

const userss: User = {
  name: 'Vikash',
  age: 90,
  hobbies: ['reading'],
  role: {
    description: 'good',
    id: 10,
  },
};

let val: {} = 'is a value'; // it will except anything except null and undefine

//way to take only object and ALSO define key and value type

let data: Record<string, string | number>;
