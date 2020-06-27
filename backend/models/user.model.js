const moongoose = require("mongoose");
const Schema = moongoose.Schema;
const userShema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
  },
  { timestamps: true }
);

const User = moongoose.model("User", userShema);
module.exports = User;
