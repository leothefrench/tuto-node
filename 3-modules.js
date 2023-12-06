// CommonJS, every files is module (by default)
// Modules - Encapsuled Code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');

require('./7-mind-grenade'); // Ici on invoque le module ce qui revient à déclencher la fonction du module importé (require)

sayHi('Léo');
sayHi(names.john);
sayHi(names.peter);
