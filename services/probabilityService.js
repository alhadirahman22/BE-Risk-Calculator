const { Probability } = require('../database/models/');

const getAll = async () => {
    return await Probability.findAll();
};

module.exports = {
    getAll,
};
