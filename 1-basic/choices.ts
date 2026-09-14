// enum => In TypeScript, an enum is used to define a fixed set of named constant values.

/*
enum Role {
  ADMIN = 0, // WE can override index from where to start
  USER,
  GUEST,
}

let role: Role = Role.ADMIN;

console.log(role);

let userRole: 'admin' | 'editor' | 'guest' = 'admin';

userRole = 'guest';
*/

// insted of using enum we can use type which is lightweight and cleaner
type Role = 'admin' | 'user' | 'guest';

type User = {
  name: string;
  age: number;
  role: Role;
  permissions: string[];
};
