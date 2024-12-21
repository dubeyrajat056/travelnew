const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();  // For storing sensitive data like your email and password in environment variables

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST route to handle form submission
app.post('/contact', (req, res) => {
    const { email, phone, message } = req.body;

    // Setup Nodemailer transporter
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'munish.p.mishra@gmail.com',
            pass: 'nkch ebon lnhl rypj'
        }
    });

    // Email content
    const mailOptions = {
        from: email,
        // to: process.env.MY_EMAIL, // Your email address where the message will be sent
        to: "munish.p.mishra@gmail.com",
        subject: `New Contact Us Form Submission`,
        html: `
      <h3>Contact Details</h3>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${message}</p>
    `
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
