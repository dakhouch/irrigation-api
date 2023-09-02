import {authentificationService} from "../services/authentificationService.mjs";
import {Router} from "express";
import {courantService} from "../services/courantService.mjs";


const router = Router();

router.get('/realtime',authentificationService.verifyToken,courantService.getLastValue)
export  default  router;