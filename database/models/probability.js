"use strict";
module.exports = (sequelize, DataTypes) => {
    const Probability = sequelize.define("Probability", {
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
        tableName: 'probability', // Ensure table name is correct
        timestamps: false // Set to true if you want timestamps
    });
    return Probability;
};
