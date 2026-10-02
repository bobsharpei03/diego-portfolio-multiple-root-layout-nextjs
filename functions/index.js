/* Import function triggers from their respective submodules: */
/*
const { onRequest, HttpsError } = require("firebase-functions/v2/https");
const nodemailer = require("nodemailer");
//const express = require("express");
const cors = require("cors")({origin: true});
/* See a full list of supported triggers at https://firebase.google.com/docs/functions 
const {setGlobalOptions} = require("firebase-functions");
const logger = require("firebase-functions/logger");

// 1. Configure the transporter
const transporter = nodemailer.createTransport({
  //service: "gmail",
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "465"),
  secure: true,
  auth: {
    user: process.env.SMTP_USER_EMAIL,
    pass: process.env.SMTP_EMAIL_PASSWORD,
  },
});

//exports.submit = onRequest({ secrets: ["SMTP_USER_EMAIL", "SMTP_EMAIL_PASSWORD"] }, 
exports.submit = onRequest({ cors: true  }, async (req, res) => {

  const toEmail = 'maquill.drive81@gmail.com';
  // Basic CORS handling
  res.set("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Methods", "POST");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).send("");
    return;
  }

  const { subject, message, userEmail } = req.body;

  const mailOptions = {
    from: process.env.SMTP_USER_EMAIL,
    to: toEmail,
    userEmail: userEmail,
    subject: subject,
    message: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    logger.log("Email sent successfully:", info.messageId);
    //res.status(200).send("Email sent successfully");
    return res.status(200).json({ success: true, messageId: info.messageId});
  } catch (error) {
    //logger.error("Error sending email:", error);
    logger.error("Failed to send email:", error);
    //res.status(500).send("Error sending email");
    return res.status(500).json({error: "Error sending email",details: error.toString() });
  }
});

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
*/
const { onRequest } = require("firebase-functions/v2/https");
const { logger } = require("firebase-functions");
const nodemailer = require("nodemailer");

exports.submit = onRequest(
  {
    cors: true,
    //secrets: ["SMTP_USER_EMAIL", "SMTP_EMAIL_PASSWORD", "SMTP_HOST", "SMTP_PORT"],
  },
  async (req, res) => {
    // Allow only POST
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { yourname, youremail, yourphonenumber, subject, message } = req.body;

    // Basic validation
    if (!yourname || !youremail || !subject || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Configure transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true,
      auth: {
        user: process.env.SMTP_USER_EMAIL,
        pass: process.env.SMTP_EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER_EMAIL,
      to: "maquill.drive81@gmail.com",
      subject: `New Contact Form Submission from ${yourname}`,
      text: `
      Name: ${yourname}
      Email: ${youremail}
      Phone: ${yourphonenumber}
      Message: ${message}
      `,
      html: `
        <h3>Someone is trying to reaching from diegomaquill.com</h3>
        <p><strong>Name:</strong> ${yourname}</p>
        <p><strong>Email:</strong> ${youremail}</p>
        <p><strong>Phone:</strong> ${yourphonenumber}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      logger.log("Email sent:", info.messageId);

      return res.status(200).json({
        success: true,
        messageId: info.messageId,
      });
    } catch (error) {
      logger.error("Failed to send email:", error);
      return res.status(500).json({
        error: "Failed to send email",
        details: error.toString(),
      });
    }
  }
);