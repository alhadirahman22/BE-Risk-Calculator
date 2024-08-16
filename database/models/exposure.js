"use strict";
module.exports = (sequelize, DataTypes) => {
    const Exposure = sequelize.define("Exposure", {
        name: {
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
        tableName: 'exposure', // Ensure table name is correct
        timestamps: false // Set to true if you want timestamps
    });
    return Exposure;
};
