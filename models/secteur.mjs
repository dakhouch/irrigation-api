import {DataTypes} from "sequelize";
import sequelize from '../sequelize.config.mjs';

const Secteur = sequelize.define('SECTEUR', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING(50),
    water_requirement: DataTypes.STRING(50),
    water_volume: DataTypes.STRING(50),
    pression_BF: DataTypes.STRING(50),
    pression_AF: DataTypes.STRING(50),
    fertigation_duration_H: DataTypes.STRING(50),
    fertigation_duration_M: DataTypes.STRING(50),
    fertigation_duration_S: DataTypes.STRING(50),
    irrigation_duration_H: DataTypes.STRING(50),
    irrigation_duration_M: DataTypes.STRING(50),
    irrigation_duration_S: DataTypes.STRING(50),
    surface: DataTypes.STRING(50),
    date: {
        type: DataTypes.STRING(50),
        defaultValue: new Date().toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }),
    },
});

export default Secteur;