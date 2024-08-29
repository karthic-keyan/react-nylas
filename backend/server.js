const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config(); // To load environment variables from a .env file

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Endpoint to fetch messages from Nylas API
app.get("/messages", async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.us.nylas.com/v3/grants/${process.env.USER_ID}/messages`,
      {
        headers: {
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching messages:", error.message);
    res
      .status(500)
      .json({ message: "Failed to fetch messages", error: error.message });
  }
});

// Endpoint to send an email using Nylas API
app.post("/send-email", async (req, res) => {
  console.log("req.body", req.body); // Log request body for debugging
  const { subject, to, body } = req.body; // Accessing req.body to get email data

  try {
    const response = await axios.post(
      `https://api.us.nylas.com/v3/grants/${process.env.USER_ID}/messages/send`,
      {
        subject: subject,
        to: to,
        body: body,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        },
      }
    );

    res.status(200).json({
      message: "Email sent successfully",
      data: response.data,
    });
  } catch (error) {
    console.error(
      "Error sending email:",
      error.response ? error.response.data : error.message
    );
    res.status(500).json({
      message: "Failed to send email",
      error: error.response ? error.response.data : error.message,
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
