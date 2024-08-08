//user signup
//user email/password
//save email as exact/password should be encrypted

//password:AppleBAll
//password:$2..........

//1.write a js function that takes the password and encrypt it as returns random text

//2. write a js function that takes the user pssword and campares the existing hash and return boolean value

//package :bcryptjs

const bcrypt = require("bcryptjs");

const genHash = (string) => bcrypt.hashSync(String(string), 10);

const compareHash = (string, hashString) =>
  bcrypt.compareSync(String(string), hashString);

const hash = genHash("AppleBall");
console.log({ hash });

const checkPw = compareHash("AppleBall", hash);
console.log({ checkPw });

// const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("B4c0//", salt);
// console.log({ hash });

// const com = bcrypt.compareSync("B4c0//", hash);
// console.log({ com });
