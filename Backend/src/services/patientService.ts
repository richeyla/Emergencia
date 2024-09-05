import fs from 'fs';
import path from 'path';
import { Patient } from '../models/patient';

const dataPath = path.join(__dirname, '../../data/patients.json');

export class PatientService {
    static getPatients(): Patient[] {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        return data;
    }

    static addPatient(patient: Patient): void {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        data.push(patient);
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
    }

    static updatePatient(id: number, updatedData: Partial<Patient>): void {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        const patientIndex = data.findIndex((p: Patient) => p.idNumber === id);
        if (patientIndex !== -1) {
            data[patientIndex] = { ...data[patientIndex], ...updatedData };
            fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
        }
    }
}
