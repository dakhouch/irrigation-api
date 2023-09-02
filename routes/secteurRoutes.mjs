import {Router} from "express";
import  {secteurService} from "../services/secteurService.mjs";
import {authentificationService} from "../services/authentificationService.mjs";

/* GET users listing. */
const router = Router();
router.get('/realtime',authentificationService.verifyToken,secteurService.getLastValue)
export  default  router;