import express from 'express';
import { getBooks, addBook, deleteBook } from '../controller/books.js';

const router = express.Router();

router.get("/", getBooks);

router.post("/", addBook);

router.post("/:id", deleteBook);

export default router;