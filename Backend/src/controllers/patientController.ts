import { Request, Response } from 'express';
import { PatientService } from '../services/patientService';

export const getPatients = (req: Request, res: Response) => {
    try {
        const patients = PatientService.getPatients();
        res.status(200).json(patients);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving patients' });
    }
};

export const addPatient = (req: Request, res: Response) => {
    try {
        const newPatient = req.body;
        // Validar los datos aquí
        if (!newPatient.name || typeof newPatient.age !== 'number') {
            return res.status(400).json({ message: 'Invalid patient data' });
        }
        PatientService.addPatient(newPatient);
        res.status(201).json({ message: 'Patient added successfully' });
    } catch (error) {
        console.error('Error adding patient:', error);
        res.status(500).json({ message: 'Error adding patient' });
    }
};

export const updatePatient = (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        PatientService.updatePatient(parseInt(id), updatedData);
        res.status(200).json({ message: 'Patient updated successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating patient' });
    }
};
