import {DataTypes} from "sequelize";
import sequelize from '../sequelize.config.mjs';


const state = sequelize.define('STATE', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    connected: {
        type: DataTypes.BOOLEAN,
    },
    last_update: {
        type: DataTypes.STRING(50),
        defaultValue: new Date().toLocaleDateString('en-US'),
    },
}, {
    tableName: 'STATE',
    timestamps: false,
});

export default state;