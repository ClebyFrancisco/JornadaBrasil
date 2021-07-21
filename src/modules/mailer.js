const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "dd3744df4d2bf7",
    pass: "24593c428e8762"
  }
});

module.exports = transport