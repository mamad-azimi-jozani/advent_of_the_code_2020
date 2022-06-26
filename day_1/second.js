const fs = require('fs')
const {join} = require('path')

const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')
// console.log(file.split('\n').map(x => parseInt(x)))
const inputs = file.split('\n').map(x => parseInt(x))



for (const i in inputs) {
    for (const j in inputs) {
        for (const k in inputs) {

            if (inputs[i] + inputs[j] + inputs[k] === 2020)
                console.log(inputs[i] * inputs[j] * inputs[k])

        }
            
    }
}