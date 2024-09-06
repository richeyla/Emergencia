import fs from 'fs';
import path from 'path';
import { Emergency } from './emergency';

// Ruta del JSON
const dataPath = path.join(__dirname, '../../data/patients.json');

export interface Patient {
    name: string;
    age: number;
    gender: string;
    idNumber: number;
    phone: string;
    relativeName: string;
    relativePhone: string;
    symptoms: string;
    hospitalized: boolean;
    emergencies: Emergency[];
    doctors: string[];
    treatments: string[];
}

export function getPatients(): Patient[] {
    try {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        return data.patients;  // Asegúrate de que devuelves la lista de pacientes
    } catch (error) {
        console.error('Error reading or parsing patients.json:', error);
        throw new Error('Error retrieving patients data');
    }
}

export function addPatient(patient: Patient): void {
    try {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        data.patients.push(patient);
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error('Error reading or writing patients.json:', error);
        throw new Error('Error adding patient');
    }
}

export function updatePatient(name: string, updatedData: Partial<Patient>): void {
    try {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        const patientIndex = data.patients.findIndex((p: Patient) => p.name === name);
        if (patientIndex !== -1) {
            data.patients[patientIndex] = { ...data.patients[patientIndex], ...updatedData };
            fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
        } else {
            throw new Error('Patient not found');
        }
    } catch (error) {
        console.error('Error reading or updating patients.json:', error);
        throw new Error('Error updating patient');
    }
}
