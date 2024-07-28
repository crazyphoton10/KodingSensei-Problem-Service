const express = require("express");
const { PORT } = require("./config/server.config");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  return res.json({ msg: "Problem Service is alive" });
});

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
