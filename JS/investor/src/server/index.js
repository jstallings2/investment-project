"use strict";

const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const favicon = require("serve-favicon");

// Setup the Express Pipeline
let app = express();
let staticPath = path.join(__dirname, "../../public");
app.use(express.static(staticPath));
app.use(favicon(path.resolve(__dirname, "../../public/favicon.ico")));
app.use(logger("dev"));
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));

/*const instructions = {instructs: ["The goal of the game is to make as much money as possible",
    "You make money by trading stocks, you may buy and sell stocks",
    "There are a number of market events that will occur throughout the game, invest accordingly",
    "There is a daily news blurb that will include a risky stock, a safe play and an up and coming stock",
    "Have fun!"]};
app.get("/instructionData", (req, res) => {
  res.status(200).send(instructions);
});*/

//const portfolio = ;

// No matter what the client asks for, serve the SPA base HTML
let indexFile = path.resolve(__dirname, "../../public/index.html");
app.get("*", (req, res) => {
  res.sendFile(indexFile);
});

let server = app.listen(8079, () => {
  console.log("SPA Server listening on " + server.address().port);
});
