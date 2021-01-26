const path = require('path')

console.log('Name' , path.basename(__filename))

console.log('Name' , path.dirname(__filename))

console.log('File: ' , path.extname(__filename))

console.log('Parse: ', path.parse(__filename).name)

console.log(path.join(___dirname, 'server.js'))
