import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import puitRouter from './routes/puitRoutes.mjs';
import courantRoutes from './routes/courantRoutes.mjs';
import secteurRouter from './routes/secteurRoutes.mjs';
import cors from "cors";
import stateRoutes from "./routes/stateRoutes.mjs";
import authentificationRoutes from "./routes/authentificationRoutes.mjs";

let app = express();
let router = express.Router()
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());


router.use('/puits/', puitRouter)
router.use('/secteurs',secteurRouter)
router.use('/courants',courantRoutes)
router.use('/state',stateRoutes)
router.use('/',authentificationRoutes)

app.use('/irrigation-app/api/',router)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
