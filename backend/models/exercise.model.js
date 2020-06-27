const moongoose = require("mongoose");
const Schema = moongoose.Schema;
const userShema = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
    },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  { timestamps: true }
);

const Exercise = moongoose.model("Exercise", userShema);
module.exports = Exercise;
