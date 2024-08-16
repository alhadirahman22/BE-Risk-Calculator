const { Consequence } = require('../database/models/');

const getAll = async () => {
    return await Consequence.findAll();
};

module.exports = {
    getAll,
};
