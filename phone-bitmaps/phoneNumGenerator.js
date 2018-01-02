for (let i = 0; i <= 9999999; i++) {
  let phone = i.toString();
  if (phone.length !== 7) {
    let repeatTimes = (7 - phone.length);
    phone = "0".repeat(repeatTimes) + phone;
    console.log(phone);  
  }
}
