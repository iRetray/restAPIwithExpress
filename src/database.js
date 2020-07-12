const mongoose = require('mongoose');
const URI = "mongodb+srv://username:mernstackpassword@mernstack.jollv.mongodb.net/<dbname>?retryWrites=true&w=majority";

mongoose.connect(URI);
const connection = mongoose.connection;
connection.once('open', function dataBaseIsConected(){
    console.log('The DB-Atlas is conected to the App');
});

/* Conection with Atlas native
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://username:mernstackpassword@mernstack.jollv.mongodb.net/<dbname>?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('The DB-Atlas is conected to the App');
  client.close();
});
*/


const credentialsAtlas = {
    "user": "username",
    "password": "mernstackpassword"
}