const fs = require('fs')
const {join} = require('path')

const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')
const input = file.split('\n')

for (const i in input) {
    input[i] = input[i].split(' ')
}

for (const i in input) {
    input[i][0] = input[i][0].replace('-',',').split(',').map(i => parseInt(i))
    if (typeof input[i][1] === 'string'){
        input[i][1] = input[i][1].replace(':','').split('')
    }
    if (typeof input[i][2] === 'string'){
        input[i][2] = input[i][2].split('')
    }
}




// console.log(input)

function Valid(number, character, character_range){
    this.number = number
    this.character = character
    this.character_range = character_range
    let counter = 0
    this.is_valid = function(){
        
        for (let index = this.number[0]; index <= this.number[1]; index++) {
            if (!this.number.includes(index)) {
                this.number.push(index)
            }
            
        }
        for (const i of this.character_range) {
            if (i === this.character[0]) {
                counter += 1
            }
        }
        return this.number.includes(counter) ? true:false
    }

}

let obj = []
for (const i in input) {
    obj[i] = new Valid(input[i][0],input[i][1],input[i][2])
}

let counter = 0
for (const i of obj) {
    if (i.is_valid() === true) {
        counter += 1
    }
}

console.log(counter)

