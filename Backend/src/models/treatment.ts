import fs from 'fs';
import path from 'path';

// Ruta al archivo JSON
const dataPath = path.join(__dirname, '../');

export interface Treatment {
    name:string;
    description:string;
    doctor:string[];
    patients:string[];
}

export function getTreatments(): Treatment[]{
    const data = JSON.parse(fs.readFileSync(dataPath,'utf-8'));
    return data.treatment;
}

