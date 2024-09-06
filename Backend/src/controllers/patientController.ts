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

// funcion controladora para agregar nuevos pacientes
export const addPatient = (req: Request, res: Response) => {
    try {
        const newPatient = req.body;//obtiene los datos del nuevo paciente 
        // Validar los datos aquí (verifica que tenga un nombre y que la edad sea un número)
        if (!newPatient.name || typeof newPatient.age !== 'number') {
             // si los datos son inválidos, responde con un estado 400 (Solicitud incorrecta) y un mensaje de error
            return res.status(400).json({ message: 'Invalid patient data' });
        }
        // si los datos son válidos, llama a la función addPatient del servicio para agregar el nuevo paciente
        PatientService.addPatient(newPatient);
        // responde un mensaje de éxito
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
