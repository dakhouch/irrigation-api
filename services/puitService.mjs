import Puit from "../models/puit.mjs";
import {Op} from "sequelize";
import moment from "moment";
const getAllPuits=async (req, res) => {
    try {
        const result = await Puit.findAll();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving data' });
    }
}
const getByNameAndDateInterval=async (req, res) => {
    const { name, startDate, endDate } = req.query;
    try {
        const data = await Puit.findAll({
            where: {
                name,
                date: {
                    [Op.between]: [startDate, endDate],
                },
            },
        });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving data' });
    }
};
const getLastValue=async (req, res) => {
    const currentDate = moment().format('DD-MM-YYYY');
    try {
        const data = await Puit.findAll({
            where: {
                date: currentDate,
            },
            raw : true ,
        });
        console.log(data)
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving data' });
    }
};


export const puitService={
    getAllPuits,
    getByNameAndDateInterval,
    getLastValue
}