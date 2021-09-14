import { Schema, model } from "mongoose"; // Erase if already required

// Declare the Schema of the Mongo model
const account = new Schema(
  {
    nameAccount: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    nameClient: {
      type: String,
      required: true,
      unique: true,
    },
    personCharge: {
      type: String,
      required: true,
    },
    team: [
      {
        type: Schema.ObjectId,
        ref: "Users",
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//Export the model
export default model("Account", account);
