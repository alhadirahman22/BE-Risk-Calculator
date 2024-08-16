const riskLevel = (floatNumber) => {
    let d;
    if (floatNumber <= 5) {
        d = "Low Risk";
    } else if (floatNumber <= 30) {
        d = "Moderate Risk";
    } else if (floatNumber <= 150) {
        d = "Substantial Risk";
    } else if (floatNumber <= 300) {
        d = "High Risk";
    } else {
        d = "Very High Risk";
    }

    return d;
}

const calculator = async (weight_probability, weight_exposure, weight_consequence) => {
    const result = weight_probability * weight_exposure * weight_consequence;
    const data = {
        result: result.toFixed(2),
        level: riskLevel(result)
    }
    return data;
}

module.exports = {
    calculator
};
