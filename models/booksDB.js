const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bookSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    synopsis: {
      type: String,
      required: true,
      trim: true,
    },
    year: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Books = mongoose.model("book", bookSchema);

module.exports = Books;
