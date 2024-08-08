require("dotenv").config();
const nodemailer = require("nodemailer");

const transporters = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

// verify connection configuration
transporters.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

const mailer = async ({ to, subject, message }) => {
  const result = await transporters.sendMail({
    from: `"Kuber Kathayat 👻" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html: message,
  });
  return result;
};

module.exports = { mailer };
