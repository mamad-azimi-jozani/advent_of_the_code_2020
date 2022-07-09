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


function Valid(number, character, character_range){
    this.number = number
    this.character = character
    this.character_range = character_range

    this.is_valid = function(){
        let counter = 0
        // console.log(this.number)
        for (const i in this.character_range) {
            if (parseInt(i) + 1 === this.number[0] || parseInt(i) + 1 === this.number[1]){
                // console.log(parseInt(i) + 1 , this.character_range[i])
                if (this.character_range[i] === this.character[0]) {
                    counter += 1
                }
                
            }
        }
        return counter === 1 ? true:false
    }
}

// let x = new Valid(input[0][0],input[0][1],input[0][2])
// console.log(x.is_valid())

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