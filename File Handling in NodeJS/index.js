const fs = require("fs");

// Sync
// const r = fs.writeFileSync("./test.txt", "Hye there");
// console.log(r);

// // Async
// const b = fs.writeFile("./form.txt", "I am form", (err)=>{});
// console.log(b);

// fs.appendFileSync("./test.txt", new Date().toLocaleString())/
// fs.appendFileSync("./test.txt", "hye harry")
               
// console.log(fs.statSync("./test.txt").atime)

const a = fs.writeFileSync("./abu.txt","I am abu iam harrypotter")
