import express from "express";

const app = express();
let counter = 0;
//  1. GET / -- this returns just a single number (starting from 0)

app.get("/", (req, res) => {
  res.send(counter.toString());
});

//     2. POST /inc -- this increases the number

app.post("/inc", (req, res) => {
  counter++;
  res.send(counter.toString());
});

//     3. POST /dec -- this decreases the number

app.post("/dec", (req, res) => {
  counter = counter - 1;
  res.send(counter.toString());
});

//     4. POST /die -- this shuts down the server
app.post("/die", (req, res) => {
  console.log("server shutting down due to 'die' request");
  res.send("server shutting down now!");
  process.exit();
});

const port = 3333;
app.listen(port, () => {
  console.log("server has started on http://localhost:" + port);
});
