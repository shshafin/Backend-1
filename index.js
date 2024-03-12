const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");

// middleware
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "shafin", email: "shafin07@gmail.com" },
  { id: 2, name: "shaila", email: "shaila07@gmail.com" },
  { id: 3, name: "swarna", email: "swarna07@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("User management system server");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  console.log("post hitting");
  console.log(req.body);
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});

app.listen(port, () => {
  console.log(`my server is running on PORT:${port} `);
});
