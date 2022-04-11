import { MongoClient, ObjectId } from 'mongodb';

// connecting to server I'm running locally
const connectionURL = 'mongodb://127.0.0.1:27017';

//  naming the database
const databaseName = 'task-manager';

// connect to db and insert test collection and document
MongoClient.connect(connectionURL, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database.');
  }
  const db = client.db(databaseName);

  db.collection('tasks')
    .deleteOne({ task: 'email Thomas' })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
