const arg = process.argv[2];
const number = Number(arg);

if (isNaN(number)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${number}`);
}