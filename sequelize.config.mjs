import {Sequelize} from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'mysql', // or your preferred database (mysql, sqlite, etc.)
    host: '198.251.89.144',
    username: 'pisteinnovation_pisteinnovation',
    password: 'Agadir@2020',
    database: 'pisteinnovation_irrigation',
    define: {
        timestamps: false,
        freezeTableName: true
    }
});

export default sequelize;