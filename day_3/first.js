const fs = require('fs')
const {join} = require('path')
const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')
const input = file.split('\n').map(i => i.repeat(32))


let trees = []
let k = 0
for (const i in input) {
    trees.push(input[i][k])
    k += 3
}

console.log(trees.filter(i => i === '#').length)
// console.log(k)
// console.log((323*3)/31)







