const { body } = require('express-validator');

const riskCalculatorValidator = [
    body('weight_probability')
        .isFloat({ gt: 0 }).withMessage('Weight Probability must be a positive number')
        .notEmpty().withMessage('Weight Probability is required'),
    body('weight_exposure')
        .isFloat({ gt: 0 }).withMessage('Weight Exposure must be a positive number')
        .notEmpty().withMessage('Weight Exposure is required'),
    body('weight_consequence')
        .isFloat({ gt: 0 }).withMessage('Weight Consequence must be a positive number')
        .notEmpty().withMessage('Weight Consequence is required')
];

module.exports = riskCalculatorValidator;
