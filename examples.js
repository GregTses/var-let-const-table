// STORED IN GLOBAL SCOPE
const storedInGlobalScope = `// Declaring variables in the global scope
var globalVar = "I am a var";
let globalLet = "I am a let";
const globalConst = "I am a const";

console.log(window.globalVar); // Accessible as a property of window
console.log(window.globalLet); // Undefined (not attached to window)
console.log(window.globalConst); // Undefined (not attached to window)

// Checking if the variables exist in the global scope
console.log(typeof globalVar); // "string"
console.log(typeof globalLet); // "string"
console.log(typeof globalConst); // "string"

// Demonstrating scope
function checkScope() {
  console.log(globalVar); // "I am a var"
  console.log(globalLet); // "I am a let"
  console.log(globalConst); // "I am a const"
}

checkScope();`;

// FUNCTION SCOPE
const functionScope = `// Declaring Variables Inside a Function
function exampleFunction() {
  var functionVar = "I am a var inside a function";
  let functionLet = "I am a let inside a function";
  const functionConst = "I am a const inside a function";

  console.log(functionVar); // Accessible
  console.log(functionLet); // Accessible
  console.log(functionConst); // Accessible
}

exampleFunction();

// Trying to access outside the function
console.log(typeof functionVar); // "undefined" (not accessible)
console.log(typeof functionLet); // "undefined" (not accessible)
console.log(typeof functionConst); // "undefined" (not accessible)`;

// BLOCK SCOPE
const blockScope = `// Example 1: var, let, and const Inside a Block
{
  var blockVar = "I am a var inside a block";
  let blockLet = "I am a let inside a block";
  const blockConst = "I am a const inside a block";

  console.log(blockVar); // Accessible
  console.log(blockLet); // Accessible
  console.log(blockConst); // Accessible
}

// Access outside the block
console.log(blockVar); // Accessible (var is NOT block-scoped, it's function or globally scoped)
console.log(blockLet);   // Error: blockLet is not defined
console.log(blockConst); // Error: blockConst is not defined

// Example 2: var Escaping a Loop Block
for (var i = 0; i < 3; i++) {
  // Block scope
  console.log("Inside loop with var:", i);
}
console.log("Outside loop with var:", i); // Accessible (var is not block-scoped)

// Example 3: let and const in a Loop Block
for (let i = 0; i < 3; i++) {
  console.log("Inside loop with let:", i);
}
// console.log("Outside loop with let:", i); // Error: i is not defined

for (const j of [1, 2, 3]) {
  console.log("Inside loop with const:", j);
}
// console.log("Outside loop with const:", j); // Error: j is not defined`;

// CAN BE REASSIGNED
const canBeReassigned = `// Example 1: Reassigning var

var x = 10; // Declare and initialize
x = 20; // Reassign
console.log(x); // Output: 20

// Example 2: Reassigning let

let y = 30; // Declare and initialize
y = 40; // Reassign
console.log(y); // Output: 40

// Example 3: Reassigning const

const z = 50; // Declare and initialize
z = 60;    // Error: Assignment to constant variable
console.log(z); // Output: 50

// Example 4: Mutable Objects with const
// Although const prevents reassignment, the contents of objects and arrays declared with const can be modified because they are stored by reference.

const obj = { name: "John", age: 25 };
obj.age = 30; // Allowed: modifying a property
console.log(obj); // Output: { name: "John", age: 30 }
obj = { name: "Jane" }; // Error: Assignment to constant variable

const arr = [1, 2, 3];
arr.push(4); // Allowed: modifying array contents
console.log(arr); // Output: [1, 2, 3, 4]
arr = [5, 6]; // Error: Assignment to constant variable

// Example 5: Reassigning in Block Scope

{
  var a = 10;
  a = 20; // Reassign allowed
  console.log(a); // Output: 20
}

{
  let b = 30;
  b = 40; // Reassign allowed
  console.log(b); // Output: 40
}

{
  const c = 50;
  c = 60; // Error: Assignment to constant variable
  console.log(c); // Output: 50
}

// Example 6: Reassigning Variables in a Loop

// Using var
for (var i = 0; i < 3; i++) {
  i = i + 1; // Reassigning is allowed
  console.log(i); // Outputs: 1, 3
}

// Using let
for (let j = 0; j < 3; j++) {
  j = j + 1; // Reassigning is allowed
  console.log(j); // Outputs: 1, 3
}

// Using const (not allowed)
const k = 0;
k = 1; // Error: Assignment to constant variable`;

// CAN BE REDECLARED
const canBeRedeclared = `// Redeclaration with var

var x = 10;
var x = 20; // Redeclaration allowed
console.log(x); // Output: 20

// Redeclaration with let

let y = 30;
let y = 40; // Error: Identifier 'y' has already been declared
console.log(y); // Output: 30

// Redeclaration with const

const z = 50;
const z = 60; // Error: Identifier 'z' has already been declared
console.log(z); // Output: 50

// Redeclaration Across Different Scopes

// Redeclaration is allowed when the scopes are different, even for let and const.

var a = 10;
let b = 20;
const c = 30;

{
  var a = 40; // Allowed: var is function/global-scoped
  let b = 50; // Allowed: let is block-scoped
  const c = 60; // Allowed: const is block-scoped

  console.log(a); // Output: 40 (overwrites global 'a')
  console.log(b); // Output: 50
  console.log(c); // Output: 60
}

console.log(a); // Output: 40 (global var was overwritten)
console.log(b); // Output: 20 (block-scoped 'b' does not affect outer 'b')
console.log(c); // Output: 30 (block-scoped 'c' does not affect outer 'c')

// Redeclaration in Functions

// Inside a function, var allows redeclaration, but let and const do not.

function test() {
  var x = 10;
  var x = 20; // Allowed: var redeclaration in the same function scope
  console.log(x); // Output: 20

  let y = 30;
  let y = 40; // Error: Identifier 'y' has already been declared
  console.log(y); // Output: 30

  const z = 50;
  const z = 60; // Error: Identifier 'z' has already been declared
  console.log(z); // Output: 50
}
test();`;

// CAN BE HOISTED
const canBeHoisted = `// Hoisting with var

console.log(x); // Output: undefined (hoisted but not initialized)
var x = 10;
console.log(x); // Output: 10

// Hoisting with let

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;
console.log(y); // Output: 20

// Hoisting with const

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;
console.log(z); // Output: 30

// Comparing Hoisting Behavior

function hoistingExample() {
  console.log(a); // Output: undefined (hoisted var)
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  console.log(c); // ReferenceError: Cannot access 'c' before initialization

  var a = 10;
  let b = 20;
  const c = 30;

  console.log(a); // Output: 10
  console.log(b); // Output: 20
  console.log(c); // Output: 30
}
hoistingExample();

// Function Scope Hoisting Example

function example() {
  console.log(a); // Output: undefined (hoisted var)
  console.log(b); // ReferenceError: Cannot access 'b' before initialization
  console.log(c); // ReferenceError: Cannot access 'c' before initialization

  var a = 1;
  let b = 2;
  const c = 3;

  console.log(a); // Output: 1
  console.log(b); // Output: 2
  console.log(c); // Output: 3
}
example();`;

export const examplesList = [
  storedInGlobalScope,
  functionScope,
  blockScope,
  canBeReassigned,
  canBeRedeclared,
  canBeHoisted,
];
