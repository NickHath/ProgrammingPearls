// regular for loop
// for (let i = 0; i <= 9999999; i++) {
//   let phone = i.toString();
//   if (phone.length !== 7) {
//     let repeatTimes = (7 - phone.length);
//     phone = "0".repeat(repeatTimes) + phone;
//     console.log(phone);  
//   }
// }

// Array fill
// console.log(Array(9999999).fill().map((_,i)=>i));

let setTest = new Set([1,2,2,3,4]);
setTest.add(5);
setTest.add(5);
console.log(setTest);

function randPhone() {

}

function* idMaker() {
  var index = 0;
  while(index < 4999999) {
    index++;
    yield Math.random().toFixed(4);
  }
}

var gen = idMaker(); // "Generator { }"

// this is what codewars user does
let phones = '';
let iterate = true;
while (iterate) {
  let curr = gen.next();
  // console.log(curr.value);
  // phones.push(curr.value);
  phones += (curr.value + '\n');
  iterate = !curr.done;
}

console.log(phones);