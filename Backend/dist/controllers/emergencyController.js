"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmergenciesHandler = void 0;
const emergencyService_1 = require("../services/emergencyService");
const getEmergenciesHandler = (req, res) => {
    try {
        const emergencies = (0, emergencyService_1.getEmergencies)();
        res.status(200).json(emergencies);
    }
    catch (error) {
        console.error('Error retrieving emergencies:', error);
        res.status(500).json({ message: 'Error retrieving emergencies' });
    }
};
exports.getEmergenciesHandler = getEmergenciesHandler;
