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

const data = ["alpha", "beta", "gamma", "delta", "bar"];
app.get("/data", (req, res) => {
  res.status(200).send(data);
});

// No matter what the client asks for, serve the SPA base HTML
let indexFile = path.resolve(__dirname, "../../public/index.html");
app.get("*", (req, res) => {
  res.sendFile(indexFile);
});

let server = app.listen(8080, () => {
  console.log("SPA Server listening on " + server.address().port);
});
