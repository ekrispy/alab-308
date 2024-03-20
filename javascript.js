//part 1  

// const CSVdata = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// console.log(CSVdata.split(','))
// let rows = CSVdata.split('\n')
// console.log(rows)


// for ( let i in rows) {
//     let cell = rows[i].split(',')
   
//     console.log(cell)
// }

// part 2

const CSVdata = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// console.log(CSVdata.split(','))
let rows = CSVdata.split('\n')
console.log(rows)
const firstData = []


for ( let i in rows) {
    let cell = rows[i].split(',')
    firstData.push(cell)
    
//     console.log(cell)
}
console.log("first",firstData)
// console.log('second',combined)

// part 3

// 
let object = {} 
object.id = firstData[1][0]
object.name =firstData[1][1]
object.occupation =firstData[1][2]
object.age =firstData[1][3]


console.log(object)
let data = []
data.push(object)
console.log(data)
 

    for ( let i = 0; i < data.length; i++ ) {
   let object = {}     
object.id = firstData[1][0]
object.name =firstData[1][1]
object.occupation =firstData[1][2]
object.age =firstData[1][3]


console.log(object)
let data = []
data.push(object)
console.log(data)

    }