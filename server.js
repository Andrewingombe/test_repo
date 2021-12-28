const express = require("express");
const { ppid } = require("process");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello form the home route");
});

app.get("/about", (req, res) => {
  res.send("Hello from the about page!!");
});

app.get("/login", (req, res) => {
  res.send("The logon page has been updated");
});

app.listen(3000, () => console.log(`listening on port 3000`));
