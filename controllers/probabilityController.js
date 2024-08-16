const express = require("express");
const router = express.Router();
const probabilityService = require('../services/probabilityService');


router.get("/", async function (req, res) {
    try {
        const getData = await probabilityService.getAll();
        res.status(200).json(getData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router; 