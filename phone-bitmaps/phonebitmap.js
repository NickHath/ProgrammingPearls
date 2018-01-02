const fs = require('file-system');
let nums = fs.readFileSync('./randomnums.txt', 'utf8');
nums = nums.split('\n');
nums = nums.map(num => parseInt(num));

let bitmap = [];
for (let i = 0; i <= 9999999; i++) {
  bitmap[i] = 0;
}

nums.forEach(number => {
  bitmap[number] = 1;
})

for (let i = 0; i <= 9999999; i++) {
  if (bitmap[i]) {
    let phone = i.toString();
    if (phone.length !== 7) {
      let repeatTimes = (7 - phone.length);
      phone = "0".repeat(repeatTimes) + phone;
      console.log(phone);
    }
  }
}




