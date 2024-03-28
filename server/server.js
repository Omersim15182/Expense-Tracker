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
    const { id,text, amount, balance, income, expense } = req.body;
    const createData = await db.query('INSERT INTO expenses (id,product, amount, balance, income, expense) VALUES ($1, $2, $3, $4, $5,$6)', [id,text, amount, balance, income, expense]);

    res.status(200).send("Added successfully");
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.delete('/deleteData', async (req, res) => {
  try {
    const { id } = req.body;
    
    console.log(`delete row : `,id);
    const deleteData = await db.query('DELETE FROM expenses WHERE id = $1', [id]);
   
    res.status(200).send("Delete successfully");
  } catch (err) {
   
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});



app.listen(4000, () => {
  console.log('Server is running on port 4000');
});