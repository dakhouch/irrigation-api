import {DataTypes} from "sequelize";
import sequelize from '../sequelize.config.mjs';


const courant = sequelize.define('COURANT', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    phase: {
        type: DataTypes.STRING(50),
    },
    courant: {
        type: DataTypes.STRING(50),
    },
    date: {
        type: DataTypes.STRING(50),
        defaultValue: new Date().toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }),},
});

export default courant;