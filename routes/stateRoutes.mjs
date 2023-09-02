import {Router} from "express";
import {stateService} from "../services/stateService.mjs";
import {authentificationService} from "../services/authentificationService.mjs";

/* GET users listing. */
const router = Router();
router.get('/',authentificationService.verifyToken,stateService.getstates)
export  default  router;