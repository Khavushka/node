const fs = require('fs')
const path = require('path')

fs.mkdir(path.join(__dirname, 'test'), function(err) {
    if(err) {
        throw err
    }
    console.log('Fil dannet')
})

const readline = require('readline-sync');
let name = readline.question("Enter name: ");
console.log(`Hi ${name}`);