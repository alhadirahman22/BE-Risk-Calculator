const express = require("express");
const router = express.Router();
const exposureService = require('../services/exposureService');


router.get("/", async function (req, res) {
    try {
        const getData = await exposureService.getAll();
        res.status(200).json(getData);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router; 