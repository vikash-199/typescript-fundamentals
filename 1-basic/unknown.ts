// any => TypeScript, don't check this value

//unknown => I don't know the type yet, so check it before using it

let data: unknown = 'Hello';

if (typeof data === 'string') {
  console.log(data.toUpperCase()); // ✅
}
