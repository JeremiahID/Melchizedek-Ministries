const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up the transporter
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use your email service provider
  auth: {
    user: 'jeremiahefe.je@gmail.com',
    pass: 'Jerry1234$$'
  }
});

app.post('/send-email', (req, res) => {
  const { name, email, Message } = req.body;

  const mailOptions = {
    from: email,
    to: 'jeremiahefe.je@gmail.com', // Replace with your email address
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
