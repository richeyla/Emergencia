"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePatient = exports.addPatient = exports.getPatients = void 0;
const patientService_1 = require("../services/patientService");
const getPatients = (req, res) => {
    try {
        const patients = patientService_1.PatientService.getPatients();
        res.status(200).json(patients);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving patients' });
    }
};
exports.getPatients = getPatients;
const addPatient = (req, res) => {
    try {
        const newPatient = req.body;
        // Validar los datos aquí
        if (!newPatient.name || typeof newPatient.age !== 'number') {
            return res.status(400).json({ message: 'Invalid patient data' });
        }
        patientService_1.PatientService.addPatient(newPatient);
        res.status(201).json({ message: 'Patient added successfully' });
    }
    catch (error) {
        console.error('Error adding patient:', error);
        res.status(500).json({ message: 'Error adding patient' });
    }
};
exports.addPatient = addPatient;
const updatePatient = (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        patientService_1.PatientService.updatePatient(parseInt(id), updatedData);
        res.status(200).json({ message: 'Patient updated successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating patient' });
    }
};
exports.updatePatient = updatePatient;
