const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("i'm up");
});
app.all("/r", (req, res) => {
  try {
    const { url } = req.query;
    res.redirect(url);
  } catch (err) {
    console.log("err");
    res.sendStatus(500);
  }
});
app.listen(port, () => console.log(`Redirector listening on port ${port}!`));
