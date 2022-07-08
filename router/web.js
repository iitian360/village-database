import express from 'express';
import villageController from '../controller/village_controller.js';


const router=express.Router();
// when we hit the page
router.get('/', villageController.all_data);
// when form will be submitted
router.post('/', villageController.craet_doc);
// when we hit the edit button
router.get('/edit/:id', villageController.edic_page);
// when we hit the update button
router.post('/update/:id', villageController.update_doc);
// when we hit the delete button
router.post('/delete/:id', villageController.delete_doc);












export default router;


