const express = require('express');
const db = require('./dbConfig');
const cors = require('cors');



const app = express();
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());

app.get('/showData', async (req, res) => {
  try {
    const resultData = await db.query('SELECT * FROM expenses');
    res.json(resultData.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.post('/createData', async (req, res) => {
  try {
    console.log(req.body);
    const { text, amount, balance, income, expense } = req.body;
    const createData = await db.query('INSERT INTO expenses (product, amount, balance, income, expense) VALUES ($1, $2, $3, $4, $5)', [text, amount, balance, income, expense]);

    res.status(200).send("Added successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/deleteData', async (req, res) => {
  try {
    // Perform the delete operation in the database
    const deleteData = await db.query('DELETE FROM expenses WHERE id = 100');
    // Send a success response to the client
    res.status(200).send("Delete successfully");
  } catch (err) {
    // If an error occurs, log the error and send an error response to the client
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});
// app.delete('/delete/:id',()=>{});
// app.put('/update',()=>{});



app.listen(4000, () => {
  console.log('Server is running on port 4000');
});