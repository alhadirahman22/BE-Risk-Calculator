"use strict";
module.exports = (sequelize, DataTypes) => {
    const Consequence = sequelize.define("Consequence", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        alias: {
            type: DataTypes.STRING,
            allowNull: false
        },
        weight: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        }
    }, {
        tableName: 'consequence', // Ensure table name is correct
        timestamps: false // Set to true if you want timestamps
    });
    return Consequence;
};
