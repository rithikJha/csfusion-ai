const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://compscifusion:easypassword@csarticles.iznuu05.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function insertArticle(article) {
    const db = client.db("compscifusion");
    const collection = db.collection("articles");
    const result = await collection.insertOne(article);
    return result;
  }




full_cont = `heuuuuuuuu`



const article = {
    title: 'nothing',
    date: 'March 34, 2000',
    description: 'tititititi',
    image: 'https://picsum.photos/id/234/300/200',
    content: full_cont}
  async function run() {
    const result = await insertArticle(article);
    console.log(result);
  }
  run();