// npm - global commands, comes with node
// npm --version

// local dependency - use it on ly in this particular project
// nmp i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac or linux)

// package.json - manifest file (stores important info about the project/package)
// manual approach (create package.json in the root, create properties, etc..)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems);