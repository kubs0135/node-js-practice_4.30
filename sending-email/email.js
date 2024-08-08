const { mailer } = require("./index");

mailer({
  to: "kuberkathayat01@gmail.com",
  SUBJECT: "Hello World!",
  message: "<h1>Hi,How are you?</h1>",
});
