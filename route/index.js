var express = require("express");
var router = express.Router();


const probabilityController = require("../controllers/probabilityController")
router.use("/probability", probabilityController)

const exposureController = require("../controllers/exposureController")
router.use("/exposure", exposureController)

const consequenceController = require("../controllers/consequenceController")
router.use("/consequence", consequenceController)


const riskCalculatorController = require("../controllers/riskCalculatorController");
router.use('/risk-calculator', riskCalculatorController)


module.exports = router; 