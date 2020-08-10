const express = require("express");
const router = express.Router();
const Books = require("../models/booksDB");

//Read all books
router.get("/", async (req, res) => {
  const bookList = await Books.find();
  res.json(bookList);
});

//Read one book
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const bookList = await Books.findById(id);
  res.json(bookList);
});

//Create book
router.post("/", async (req, res, next) => {
  const title = req.body.title;
  const author = req.body.author;
  const synopsis = req.body.synopsis;
  const year = Number(req.body.year);

  try {
    const book = await new Books({
      title,
      author,
      synopsis,
      year,
    });
    book.save();
    res.json("Book has been added");
  } catch (error) {
    next(error);
  }
});

//Update book
router.put("/:id", async (req, res, next) => {
  const id = req.params.id;
  const value = {
    title: req.body.title,
    author: req.body.author,
    synopsis: req.body.synopsis,
    year: Number(req.body.year),
  };
  try {
    await Books.findByIdAndUpdate(id, value);
    res.json("Book has been updated");
  } catch (error) {
    next(error);
  }
});

//Delete book
router.delete("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    await Books.findByIdAndDelete(id);
    res.json("Book has been deleted");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
