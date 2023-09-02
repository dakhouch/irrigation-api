import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.config.mjs';

const Puit = sequelize.define('PUIT', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(50),
    },
    water_volume: {
        type: DataTypes.STRING(50),
    },

    debit: DataTypes.STRING(50),
    state: DataTypes.BOOLEAN,
    date: {
        type: DataTypes.STRING(50),
        defaultValue: new Date().toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        }),
    },
});

export default Puit;
