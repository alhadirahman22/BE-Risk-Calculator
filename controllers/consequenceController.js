const express = require("express");
const router = express.Router();
const consequenceService = require('../services/consequenceService');


router.get("/", async function (req, res) {
    try {
        const getData = await consequenceService.getAll();
        res.status(200).json(getData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router; 