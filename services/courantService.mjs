
import moment from "moment";
import courant from "../models/courant.mjs";
const getLastValue=async (req, res) => {
    const currentDate = moment().format('DD-MM-YYYY');
    try {
        const data = await courant.findAll({
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


export const courantService={
    getLastValue
}