function generatePassword(passLength) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  const passwordGenerated = [];
  for (let i = 0; i < passLength; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);

    passwordGenerated.push(characters[randomNumber]);
  }

  return passwordGenerated.join("");
}

const password = generatePassword(12);
console.log(`Generated password: ${password}`);

// let variabel = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()"
// console.log(variabel.length)
// let random = 0 * 72 +1
// console.log(random)
// let b = variabel[1]
// console.log(b)
