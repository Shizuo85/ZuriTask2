const { readFileSync, writeFileSync } = require('fs')
let groupA = ["Aaran", "Aaren", "Aarez", "Aarman", "Aaron", "Aarron", "Aaryan", "Aaryn", "Aayan", "Aazaan"];

let groupB = [ "Branden", "Brandon", "Brandonlee", "Brody", "Brogan", "Broghan", "Brooke", "Brooklin", "Brooklyn", "Bruce"];

let places = ["Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa"]

let batchA = readFileSync('./batchA.txt', 'utf8').split(" ");
let batchB = readFileSync('./batchB.txt', 'utf8').split(" ");

while(true){
  let A = Math.floor(Math.random()*10);
  let B = Math.floor(Math.random()*10);
  
  if (!batchA.includes(String(A)) && !batchB.includes(String(B))){
    batchA.push(A);
    batchB.push(B);
    
    console.log(`${groupA[A]} and ${groupB[B]} will be going on a dinner date at ${places[A]}.\n`)
  
    writeFileSync(
    './batchA.txt',
    ` ${A}`,
    { flag: 'a' }
  )
    writeFileSync(
    './batchB.txt',
    ` ${B}`,
    { flag: 'a' }
  )
    break;
  }
}


if (batchA.length==11){
  writeFileSync(
  './batchA.txt',
  ``
  )
  writeFileSync(
  './batchB.txt',
  ``
  )
}

