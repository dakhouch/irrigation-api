import {Router} from "express";
import {puitService} from "../services/puitService.mjs";
import {authentificationService} from "../services/authentificationService.mjs";

/* GET users listing. */
const router = Router();
router.get('/',authentificationService.verifyToken,puitService.getAllPuits);
router.get('/filtered',authentificationService.verifyToken,puitService.getByNameAndDateInterval);
router.get('/realtime',authentificationService.verifyToken,puitService.getLastValue)
router.get('/status',authentificationService.verifyToken,puitService.getLastValue)

export  default  router;