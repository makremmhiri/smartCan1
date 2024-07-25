const express = require('express');
const cors = require('cors');
const { connectToDb, getDb } = require('./db');

const app = express();
app.use(cors());

connectToDb((err) => {
  if (!err) {
    app.listen(5000, () => {
      console.log('App listening on port 5000');
    });
  } else {
    console.error('Failed to connect to the database:', err);
  }
});

// app.get('/data', async (req, res) => {
//   const db = getDb();
//   try {
//     const data = await db.collection('poubelle').find().toArray();
//     res.json(data);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
