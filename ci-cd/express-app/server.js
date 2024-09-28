//declare express//
const express = require("express");

// Load environment variables from .env file
require("dotenv").config();

//Acessing environment variables

const PORT = process.env.PORT || 1000;

//initialize app//

const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World");
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
