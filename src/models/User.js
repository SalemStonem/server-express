import { Schema, model} from 'mongoose'; // Erase if already required

// Declare the Schema of the Mongo model
const user = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    typeUser: {
      type: String,
      required: true,
      trim: true,
    },
    inTeam: {
      type: Boolean,
    },
    lastChange: {
      type: Schema.ObjectId,
      ref: "UserLogs",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//Export the model
export default model('User', user);

