import { Schema, model } from 'mongoose'; // Erase if already required

// Declare the Schema of the Mongo model
const userLogs = new Schema({
  updated: [String],
});

//Export the model
export default model('UserLogs', userLogs);