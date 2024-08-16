const express = require("express");
const router = express.Router();
const riskCalculatorValidator = require('../validators/riskCalculatorValidator')
const handleValidationErrors = require("../middleware/validationHandler");
const riskCalculatorService = require("../services/riskCalculatorService");

router.post('/', riskCalculatorValidator, handleValidationErrors, async (req, res) => {
    try {
        const { weight_probability, weight_exposure, weight_consequence } = req.body;
        const d = await riskCalculatorService.calculator(weight_probability, weight_exposure, weight_consequence);
        res.status(200).json({ message: 'Calculation successful', data: d });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router; 