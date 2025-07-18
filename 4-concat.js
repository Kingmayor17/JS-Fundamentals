#!/usr/bin/node

// Get arguments, excluding 'node' and the script name
const args = process.argv.slice(2); 

// Check the number of arguments and print accordingly
if (args.length === 0 || args.length === 1) {
  // If 0 or 1 argument is provided, print the usage message
  console.log("Usage: ./script_name.js <argument1> <argument2>");
} else if (args.length >= 2) {
  // If 2 or more arguments are provided, print the desired format
  const arg1 = args[0];
  const arg2 = args[1];
  console.log(`${arg1} is ${arg2}`);
}
