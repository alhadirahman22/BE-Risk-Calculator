const riskLevel = (floatNumber) => {
    let d;
    if (floatNumber <= 10) {
        d = "Low Risk";
    } else if (floatNumber < 50) {
        d = "Moderate Risk";
    } else if (floatNumber < 200) {
        d = "Substantial Risk";
    } else if (floatNumber < 300) {
        d = "High Risk";
    } else {
        d = "Very High Risk";
    }

    return d;
}

const calculator = async (weight_probability, weight_exposure, weight_consequence) => {
    const result = weight_probability * weight_exposure * weight_consequence;
    // const result = 0.08 * Math.pow(weight_probability, 2) * Math.pow(weight_exposure, 1.7) * Math.pow(weight_consequence, 1.2) 
    const data = {
        result: result.toFixed(2),
        level: riskLevel(result)
    }
    return data;
}

module.exports = {
    calculator
};
