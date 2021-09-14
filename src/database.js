import mongoose from "mongoose";
import config from './config'

(async () => {
  try {
    const db = await mongoose.connect(config.mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB is Connected:", db.connection.name);
  } catch (err) {
    throw err;
  }
})();
// MongoClient.connect("mongodb://localhost:27017/users", function (err, db) {
//   if (err) {
//     throw err;
//   }
//   db.collection("mammals")
//     .find()
//     .toArray(function (err, result) {
//       if (err) {
//         throw err;
//       }
//       console.log(result);
//     });
// });
