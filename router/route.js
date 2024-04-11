import { Router} from "express";
const router = Router()

//controller imports
import * as controller from '../controllers/controller.js';

//route for quetions api
router.get('/questions',controller.getQuestions);

router.post('/questions', controller.insertQuestions);

router.delete('/questions',controller.dropQuestions);


//route for result api
router.get('/result',controller.getResult);

router.post('/result',controller.storeResuIt);

router.delete('/result',controller.dropResult);


export default router;