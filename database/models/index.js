'use strict';

const fs = require('fs');
const path = require('path');
const { Sequelize, QueryTypes } = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV_DB_DIRECT || 'development';
const config = require("../../config/config")[env];
console.log("config ", config);
const db = {};
const models = `${process.cwd()}/database/models/` || __dirname;

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password, {
    host: config.host || 'localhost',
    port: config.port,
    dialect: 'mysql',
    timezone: '+07:00', // Singapore time (UTC +8)
    dialectOptions: {
        connectTimeout: 60000, // Adjust the timeout value as needed (in milliseconds)
    },

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    define: config.define,
    transactionType: Sequelize.Transaction.ISOLATION_LEVELS.READ_UNCOMMITTED
}
);

fs.readdirSync(models)
    .filter((file) => {
        return (
            file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
        );
    })
    .forEach((file) => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});



db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.QueryTypes = QueryTypes

module.exports = db;
