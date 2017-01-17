const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'codsworth.robotics@gmail.com',
    pass: process.env.PASS
  }
});

const sendEmail = (to, subject, message) => {
  const mailOptions = {
    from: 'Alfred Pennyworth <codsworth.robotics@gmail.com>',
    to,
    subject,
    html: message
  };

  transport.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error);
    }
  });
};

module.exports = sendEmail;
