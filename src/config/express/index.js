const express = require("express");
const app = express();
// const routes = require()
const { port } = require("../env");

app.set("port", port || 1338);
app.use(express.json());

app.get("/", (req, res) => {
   return res.status(200).json("Webserver up !");
});

Object.keys(routes).forEach((key) => app.use(`/api/${key}`, routes[key]));

module.exports = app;