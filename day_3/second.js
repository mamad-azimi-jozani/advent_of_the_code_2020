const fs = require('fs')
const {join} = require('path')
const file = fs.readFileSync(join(__dirname, 'input.txt'), 'utf8')
const input = file.split('\n').map(i => i.repeat(80))
// console.log(input)
// console.log(input[2][1])
// console.log(input[2][4])


class Solve{

  constructor(data){
    this.data = data
  }

  right_1_down_1(){
    let k = 0
    let counter = 0
    for (const i in this.data) {
      if (this.data[i][k] === '#') {
        counter += 1
      }
      k += 1
    }
    return counter
  }
  right_3_down_1(){
    let k = 0
    let counter = 0
    for (const i in this.data) {
      if (this.data[i][k] === '#') {
        counter += 1
      }
      k += 3
    }
    return counter

  }
  right_5_down_1(){
    let k = 0
    let counter = 0
    for (const i in this.data) {
      if (this.data[i][k] === '#') {
        counter += 1
      }
      k += 5
    }
    return counter

  }
  right_7_down_1(){
    let k = 0
    let counter = 0
    for (const i in this.data) {
      if (this.data[i][k] === '#') {
        counter += 1
      }
      k += 7
    }
    return counter
  }

  right_1_down_2(){
    let k = 1
    let tree = 0
    for (let i = 2; i < this.data.length; i += 2) {
      if (this.data[i][k] === '#')
        tree += 1
      k += 1
    }

    return tree







  }
  total(){
    let multipy = []
    multipy.push(this.right_1_down_1())
    multipy.push(this.right_3_down_1())
    multipy.push(this.right_5_down_1())
    multipy.push(this.right_7_down_1())
    multipy.push(this.right_1_down_2())
    return multipy.reduce((a,b) => a*b)
  }

}


let x = new Solve(input)

console.log(x.total())
console.log(x.right_1_down_2())
console.log('ff')
// console.log(input[2][1])