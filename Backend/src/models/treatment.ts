import fs from 'fs';
import path from 'path';

// Ruta al archivo JSON
const dataPath = path.join(__dirname, '../../data/treatment.json');

export interface Treatment {
    treatmentId: number;         
    doctorId: number;            
    patientName: string;         
    treatmentDescription: string; 
}

export function getTreatments(): Treatment[]{
    const data = JSON.parse(fs.readFileSync(dataPath,'utf-8'));
    return data.treatment;
}

