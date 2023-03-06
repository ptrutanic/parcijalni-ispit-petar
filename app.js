const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();

// Load Chance
var Chance = require("chance");

// Instantiate Chance so it can be used
var chance = new Chance();

// Use Chance here.
var my_random_string = chance.string();

console.log(my_random_string);

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.use("/assets", express.static(__dirname + "/assets"));
app.use("/", router);

app.listen(process.env.port || 3000);
console.log("Running at Port 3000");
