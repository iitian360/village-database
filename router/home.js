import express from 'express';
import home_page from '../controller/home_controller.js';
const router=express.Router();

router.get('/',home_page);

export default router;