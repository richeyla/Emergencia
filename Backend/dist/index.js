"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patient_1 = require("./models/patient");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/patients', (req, res) => {
    res.json((0, patient_1.getPatients)());
});
app.post('/patients', (req, res) => {
    (0, patient_1.addPatient)(req.body);
    res.status(201).json({ message: 'Patient added' });
});
// Otros endpoints 
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
