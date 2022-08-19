const fs = require('fs')
const {join} = require('path')

const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')
const input = file.split('\n')
// console.log(input)
class BinaryBoarding{
    constructor(data){
        this.data = data
    }
    binary_space_partitioning() {
        let first = 0
        let last = 127
        let low = 0
        let high = 7
        let select_1 = 0
        let select_2 = 0
        for (const i in this.data) {
            var mid = parseInt((first+last)/2)
            var midd = parseInt((low+high)/2)

            if (this.data[i] === 'F') {
                last = mid
            }
            if (this.data[i] === 'B') {
                first = mid+1
            }
            if (this.data[6] === 'F') {
                select_1 = last
            }
            if (this.data[6] === 'B') {
                select_1 = first
            }

            if (this.data[i] === 'R') {
                low = midd+1
            }
            if (this.data[i] === 'L') {
                high = midd
            }
            if (this.data[9] === 'R') {
                select_2 = high
            }
            if (this.data[9] === 'L') {
                select_2 = low
            }
        }
        return select_1*8 + select_2 
    }
    
}

let input_obj = []
for (const i in input) {
    input_obj[i] = new BinaryBoarding(input[i])
}

maxi = 0
for (const i in input_obj) {
    if (input_obj[i].binary_space_partitioning()> maxi) {
        maxi = input_obj[i].binary_space_partitioning()
    }
}
console.log(maxi)
