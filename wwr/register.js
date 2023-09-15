const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse incoming JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the register.html page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'register.html'));
});

// Route to handle user registration form submission
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Append the user details to the register.html file
  const userDetails = `<tr><td>${username}</td><td>${email}</td><td>${password}</td></tr>\n`;
  fs.appendFile(path.join(__dirname, 'register.html'), userDetails, (err) => {
    if (err) {
      console.error('Error appending user details:', err);
      res.status(500).send('Error appending user details');
    } else {
      console.log('User details appended successfully');
      res.status(200).send('User details appended successfully');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
