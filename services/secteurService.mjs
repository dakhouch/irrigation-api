import Secteur from "../models/secteur.mjs";
import moment from "moment";

const getLastValue=async (req, res) => {
    const currentDate = moment().format('DD-MM-YYYY');
    try {
        let data = await Secteur.findAll({
            where: {
                date: currentDate,
            },
            raw : true ,
        });
        const formattedData=data.map(item=>({...item ,"fertigation_duration":`${item["fertigation_duration_H"]} h ${item["fertigation_duration_M"]} min ${item["fertigation_duration_S"]} s`,"irrigation_duration":`${item["irrigation_duration_H"]} h ${item["irrigation_duration_M"]} min ${item["irrigation_duration_S"]} s`}))
        res.json(formattedData);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving data' });
    }
};

export const secteurService={
    getLastValue
}