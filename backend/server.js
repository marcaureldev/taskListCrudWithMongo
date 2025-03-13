const express = require('express');
const connectDB = require('./config/database');
require('dotenv').config();
const app = express()
const port = 3000

// Connection à MongoDB
connectDB();

app.use(express.json());

app.use("/tasks", require("./routes/tasks.routes"))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})