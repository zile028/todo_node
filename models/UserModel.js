const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  fullName: { type: String, required: true },
  age: { type: Number, default: null },
  gender: {
    type: String,
    validate: {
      validator: (inputGender) => {
        return ["male", "female"].includes(inputGender.toLowerCase());
      },
      message: "You input wrong gender!",
    },
  },
  images: {
    type: Array,
    validate: {
      validator: (inputImages) => {
        console.log(inputImages);
        return inputImages.length < 4;
      },
      message: "Allowed only 3 images!",
    },
  },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: () => new Date().getTime() },
  address: {
    city: { type: String, default: null },
    state: { type: String, default: null },
    street: { type: String, default: null },
  },
});

const UserModel = model("users", UserSchema);
module.exports = UserModel;
