const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port =  3000;

// Load environment variables from .env file
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log('EMAIL_USER:', process.env.EMAIL_USER);
console.log('EMAIL_PASS:', process.env.EMAIL_PASS);

// Set up the transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', //  email service provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, Message } = req.body;

  const mailOptions = {
    from: email,
    to: 'jeremiahefe.je@gmail.com', // my email address
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage:\n${Message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Failed to send email.');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
