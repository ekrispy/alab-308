//part 1  
// 

// const CSVdata = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// console.log(CSVdata.split(','))
// let rows = CSVdata.split('\n')
// console.log(rows)


// for ( let i in rows) {
//     let cell = rows[i].split(',')
   
//     console.log(cell)
// }

// part 2
// was able to put into an array

const CSVdata = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// console.log(CSVdata.split(','))
let rows = CSVdata.split('\n')
console.log(rows)
const firstData = []


for ( let i in rows) {
    let cell = rows[i].split(',')
    firstData.push(cell)
    
}
console.log("first",firstData)


// part 3

// 
// let object = {} 
// object.id = firstData[1][0]
// object.name =firstData[1][1]
// object.occupation =firstData[1][2]
// object.age =firstData[1][3]


// console.log(object)
// let data = []
// data.push(object)
// console.log(data)
 


// below is a long way to get what we want.. 

// for(let i=1;i<firstData.length;i++){
//     let object ={}
  
//     object.id = firstData[i][0]
//     object.name = firstData[i][1]
//     object.occupation = firstData[i][2]
//     object.age = firstData[i][3]
    
//   for (let j =0;j<firstData[0].length;j++){
//     object[data[0][j]] =  firstData[i][j]
//     // console.log(data[0][j])
//   }
  
//   newData.push(object)
//   } 


// short and easier way to get the right ouput for part 3

let newData = []


for(let i=1;i<firstData.length;i++){
  let object ={}

 
for (let j =0;j<firstData[0].length;j++){
    let key = firstData[0][j].toLowerCase();
    
  let value = firstData[i][j]
  object[key] =  value

}

newData.push(object)
} 

console.log(newData)

//part 44
newData.pop()
newData.splice(1,0, {id: "48", name: "Barry", occupation: "Runner", age: "25" }) 
newData.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(newData)

// below is a long way to get the average
// console.log((Number(newData[0].age)+Number(newData[1].age)+Number(newData[2].age)+Number(newData[3].age)+Number(newData[4].age))/5)

// short way to get the average
let total =0
for(let i=0;i<newData.length;i++){
  total += Number(newData[i].age)
}
console.log(total/5)

// part 5


// below is a long way method to get the same reult as in line 119-124
// for (let i= 0; i<newData.length;i++){
// console.log(newData[i].id, ','+ newData[i].name,',' + newData[i].occupation, ',' + newData[i].age)

// }
// total += Number(newData[i].age)
// console.log(JSON.stringify(newData))


let CSV = "";
for (let i= 0; i < newData.length; i++) {
    CSV += newData[i].id+ ',' + newData[i].name+ ',' + newData[i].occupation+ ',' + newData[i].age
    
    }
console.log(CSV)