const fs = require('file-system');
let nums = fs.readFileSync('./randomnums.txt', 'utf8');
nums = nums.split('\n');


let sortedNums = nums.sort((a, b) => a-b);
