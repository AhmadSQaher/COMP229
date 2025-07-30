import config from './config/config.js';
import app from './server/express.js';
import mongoose from 'mongoose';
import express from 'express';
import { sendContactEmail } from './server/helpers/email.util.js'; // ✅ path adjusted

app.use(express.json());

app.post('/api/contact/send-email', async (req, res) => {
  const {
    firstName,
    lastName,
    contactNumber,
    emailAddress,
    message
  } = req.body;

  try {
    await sendContactEmail({
      firstName,
      lastName,
      contactNumber,
      emailAddress,
      message
    });

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
});

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoUri, { useNewUrlParser: true }).then(() => {
  console.log("Connected to the database!");
});
mongoose.connection.on('error', () => {
  throw new Error(`Unable to connect to database: ${config.mongoUri}`);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio Application." });
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('Server started on port %s.', config.port);
});