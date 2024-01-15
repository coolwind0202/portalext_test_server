import express from "express";

const app = express();

app.post("/action", (req, res) => {
  res.status(200);
  res.send("<p>【回答済】回答が完了しました</p>");
});

app.use(express.static("static"));

app.listen(3000);