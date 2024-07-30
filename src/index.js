const express = require("express");
const { PORT } = require("./config/server.config");
const bodyParser = require("body-parser");
const apiRouter = require("./routes");
const errorHandler = require("./utils/errorHandler");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  return res.json({ msg: "Problem Service is alive" });
});

//Last MW if any error comes
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server started at PORT ${PORT}`);
});
