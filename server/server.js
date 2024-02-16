const express = require('express');
const db = require('./dbConfig');

const app = express();
let i=1;
const test = {
  Id: 1,
  Product: 'computer',
  Amount: 30
};

app.get('/showData', async (req, res) => {
  try {
    const resultData = await db.query('SELECT * FROM expenses');
    res.json(resultData.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/createData', async (req, res) => {
  try {
    
    const createData = await db.query('INSERT INTO expenses (Id,Product,Amount) VALUES ($1,$2,$3)', [test.Id,test.Product, test.Amount]);
    if (test.Id===i) {
      test.Id=i+1;
      i++;      
    }
    console.log(createData);
    res.status(200).send("Added successfully");
  }
  catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/deleteData', async (req, res) => {
  try {
    // Perform the delete operation in the database
    const deleteData = await db.query('DELETE FROM expenses WHERE id = 1');
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