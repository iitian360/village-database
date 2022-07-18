import express from 'express';
import filter from '../controller/book_controller.js';
const router= express.Router();

router.get('/', filter.romantic_book);

export default router;
