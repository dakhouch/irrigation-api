import {Op} from "sequelize";
import state from "../models/state.mjs";
import moment from "moment";


const getstates=async (req, res) => {
    try {
        const data = await state.findOne();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving data' });
    }
};

export const stateService={
    getstates,
}