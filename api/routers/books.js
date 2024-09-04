import express from 'express';
import { getBooks, addBook } from '../controller/books.js';

const router = express.Router();

router.get("/", getBooks);

router.post("/post", addBook);

export default router;