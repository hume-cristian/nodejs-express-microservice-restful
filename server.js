// server.js

// Require express package
const express = require('express');
const bodyParser = require('body-parser');

// Create an app using express constructor
const app = express();
app.use(bodyParser.json());

let usersList = {
    1: {
      id: '1',
      username: 'Ryan Lienhart Dahl',
    },
    2: {
      id: '2',
      username: 'Cristian Hume Henriquez',
    },
  };

app.get('/nodejs/express/api/v1/users', (req, res) => {
  return res.send(Object.values(usersList));
});

app.get('/nodejs/express/api/v1/users/:userId', (req, res) => {
  return res.send(usersList[req.params.userId]);
});

app.post('/nodejs/express/api/v1/users', (req, res) => {
  return res.send('POST HTTP method on user resource');
});

app.put('/nodejs/express/api/v1/users/:userId', (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`,);
});

app.patch('/nodejs/express/api/v1/users/:userId', (req, res) => {
  return res.send(`PATCH HTTP method on user/${req.params.userId} resource`,);
});

app.delete('/nodejs/express/api/v1/users/:userId', (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`,);
});

// Declare your port
const PORT = 3000;

// Call the listen method on the app
app.listen(PORT, () => {
  console.log("Server is Running on PORT: " + PORT);
});