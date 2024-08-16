const { Exposure } = require('../database/models/');

const getAll = async () => {
    return await Exposure.findAll();
};

module.exports = {
    getAll,
};
