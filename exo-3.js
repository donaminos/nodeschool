var fs = require('fs');

var filepath = process.argv[2];

var buff = fs.readFileSync(filepath);

var str = buff.toString();

var arr = str.split('\n');

console.log(arr.length -1);