const express = require("express");

const app = express();

app.use(express.static("frontend"));

console.log("Running in port 3000");

app.listen(3000);