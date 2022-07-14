const fs = require('fs')
const {join} = require('path')

const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')
const input = file.split('/\r?\n/')
let passport = []
input[0].split('\n\n')
for (const i in input[0].split('\n\n')) {
    passport.push(input[0].split('\n\n')[i].split('\n'))
}
let final_passport = []
for (const i in passport) {
    final_passport.push(passport[i].reduce((a,b) => a + ' ' + b).split(' '))
}


class Passport{
    constructor(data){
        this.data = data
        this.passport_credentials = {
            'byr' : 1,
            'iyr' : 2,
            'eyr' : 3,
            'hgt' : 4,
            'hcl' : 5,
            'ecl' : 6,
            'pid' : 7,
        }
    }
    passport_is_valid(){
        let counter = 1
        for (const i in this.data) {
            // console.log(this.data[i])
            if (this.data[i].substring(0, 3) in this.passport_credentials)
                counter += 1
            
        }
        return counter === 8
    } 
}

let obj = []
for (const i in final_passport) {
    obj[i] = new Passport(final_passport[i])
}

let counter = 0
for (const i in obj) {
    if (obj[i].passport_is_valid()) {
        counter += 1
    }
}
console.log(counter)




