// console.log(process.cwd());
// console.log(process.argv);

const isError = true;

if(isError) {
  console.error('hubo un error');
  process.exit(1);
} else {
  console.log('todo bien')
  process.exit(0);
}
