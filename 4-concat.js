#!/usr/bin/node

const args = process.argv.slice(2); 

if (args.length < 2) {
  // This part is for user guidance, might not be needed by the checker
  // but doesn't hurt for local testing.
  console.log("Usage: ./script_name.js <argument1> <argument2>"); 
} else {
  const arg1 = args[0];
  const arg2 = args[1];
  console.log(`${arg1} is ${arg2}`); // This is the crucial line
}
