"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTreatmentsHandler = void 0;
const treatmentService_1 = require("../services/treatmentService");
const getTreatmentsHandler = (req, res) => {
    try {
        const treatments = (0, treatmentService_1.getTreatments)();
        res.status(200).json(treatments);
    }
    catch (error) {
        console.error('Error retrieving treatments:', error);
        res.status(500).json({ message: 'Error retrieving treatments' });
    }
};
exports.getTreatmentsHandler = getTreatmentsHandler;
