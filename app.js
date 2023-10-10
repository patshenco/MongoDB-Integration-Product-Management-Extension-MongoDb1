const express = require('express');
const{connectToDb, getDb} = require('./db')
const app = express();
const bodyParser = require('body-parser');
let db 
connectToDb((err)=>{
if (!err){
  app.listen(3000, () => {
    console.log('Server is listening on port 3000');
  });
  db = getDb()
}
})
app.use(bodyParser.json());
// get products
app.get('/products', async (req, res) => {
  let products = await db.collection('produit')
  .find().toArray();
  console.log(products);
    res.send(products)
});





















































// const { MongoClient } = require('mongodb');
// const express = require('express');
// const bodyParser = require('body-parser'); 
// const app = express();
// const port = 3000;

// const url = "mongodb://127.0.0.1:27017";

// app.use(bodyParser.json());

// const client = new MongoClient(url);

// async function run() {
//     try {
//       const database = client.db('products');
//       const products = database.collection('products');
//       // Query for a movie that has the title 'Back to the Future'
//       const query = { name: 'iPhone 12 Pro' };
//       const product = await products.findOne(query);
//       app.get('/', async (req, res) => {
//                 res.json(product);
//     });
//       console.log(product);
//     } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//     }
//   }
 


// run().catch(console.dir);
//   app.listen(port, () => {
//     console.log(`Server is running on port http://localhost:${port}`);
//   });  