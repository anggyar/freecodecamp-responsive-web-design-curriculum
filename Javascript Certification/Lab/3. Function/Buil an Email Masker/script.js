function maskEmail(email) {
  const indexAt = email.indexOf("@");
  const maskedChar = email.slice(1, indexAt - 1);
  // console.log(maskedChar)

  const stars = "*".repeat(maskedChar.length);
  // console.log(stars)

  const maskedEmail = email.replace(maskedChar, stars);
  // console.log(email.replace(maskedChar, stars))
  // coba cek perbandingan log
  return maskedEmail;
}

let email = "anggyarmhdyahya@gmail.com";
maskEmail(email);
console.log(maskEmail(email));
