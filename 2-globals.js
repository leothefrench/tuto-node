// GLOBALS - NO WINDOW OBJECT !!!

// ON A SOUS NODE DES VARIABLES GLOBALES ACCESSIBLES PARTOUT
// VOICI QUELQUES UNE DES CES VARIABLES

// __dirname    - path to current directory (double underscore)
// __filename   - file name
// require  - function to use modules(CommonJS)
// processs - info about env where the programm is being executed

console.log(__dirname);
setInterval(() => {
  console.log('Hello Cobra !');
}, 1000);
console.log(__filename);
