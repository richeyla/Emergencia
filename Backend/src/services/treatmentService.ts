import fs from 'fs';
import path from 'path';

// Ruta del JSON
const dataPath = path.join(__dirname, '../../data/treatments.json');

export interface Treatment {
    treatmentId: number;
    doctorId: number;
    patientName: string;
    treatmentDescription: string;
}

export function getTreatments(): Treatment[] {
    try {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        return data;  // Devuelve el array de tratamientos directamente
    } catch (error) {
        console.error('Error reading or parsing treatments.json:', error);
        throw new Error('Error retrieving treatments data');
    }
}
