import {Router} from "express";
import {} from "../services/authentificationService.mjs";
import {authentificationService} from "../services/authentificationService.mjs";

/* GET users listing. */
const router = Router();
router.post('/login',authentificationService.login)
export  default  router;