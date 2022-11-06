import express from 'express';
import filter from '../controller/book_controller.js';

import home_action from '../controller/home_controller.js';
const router=express.Router();

router.get('/',home_action.home_page);
router.get('/register',home_action.register_page);
router.post('/register' ,home_action.client_data);
router.get('/history',filter.history_book);
router.get('/romantic',filter.romantic_book);
router.get('/story',filter.story_book);
router.get('/biography',filter.biography_book);
router.get('/business',filter.business_book);
router.get('/science',filter.science_book);
router.get('/novel',filter.novel_book);
router.get('/mathmatics',filter.math_book);
router.get('/biology',filter.biology_book);
router.get('/poetry',filter.poetry_book);
router.get('/all_books',filter.all_book);

export default router;