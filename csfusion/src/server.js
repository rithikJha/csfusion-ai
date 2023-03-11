const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();

// Set up CORS
app.use(cors());

// Set up MongoDB Atlas connection URI
const uri = 'mongodb+srv://compscifusion:easypassword@csarticles.iznuu05.mongodb.net/?retryWrites=true&w=majority';

// Set up API endpoint
app.get('/articles', async (req, res) => {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true });
    await client.connect();
    const database = client.db('compscifusion');
    const articles = await database.collection('articles').find().toArray();
    res.json(articles);
    client.close();
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving articles');
  }
});

// Start server
app.listen(3011, () => console.log('Server started on port 3000'));
