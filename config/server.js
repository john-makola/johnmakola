const nodemailer = require("nodemailer");

const config = require("./config.js");

export const transporter = nodemailer.createTransport({
  host: "johnmakola.com",
  secureConnection: false,
  tls: {
    rejectUnauthorized: false,
  },
  port: 587,
  auth: {
    user: config.jaymakuser,
    pass: config.pass,
  },
});
