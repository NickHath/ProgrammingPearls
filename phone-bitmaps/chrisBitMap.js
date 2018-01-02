const fs = require('file-system');
let input = fs.readFileSync('randomnums.txt', 'utf8');
let numbers = input.split(`\n`).map(c=>parseInt(c));
let bitmap = [];
for (i=0; i<9999999; i++) {
    bitmap[i] = 0;
}

numbers.forEach(c => {
    bitmap[c] = 1;
})

for (i=0; i<9999999; i++) {
    let base = '0000000';
    let fill = i.toString().length;
    if (bitmap[i] !== 0) {
        console.log(base.substr(fill) + i)
    }
}