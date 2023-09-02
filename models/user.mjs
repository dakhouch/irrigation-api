import {DataTypes} from "sequelize";
import sequelize from '../sequelize.config.mjs';


const user = sequelize.define('USER', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    password: {
        type: DataTypes.STRING(50),
    },
    username: {
        type: DataTypes.STRING(50),
    },
}, {
    tableName: 'USER',
    timestamps: false,
});

export default user;