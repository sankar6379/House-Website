const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  db.query(
    'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)',
    [name, email, message],
    (err, result) => {
      if (err) throw err;
      res.redirect('/');
    }
  );
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
