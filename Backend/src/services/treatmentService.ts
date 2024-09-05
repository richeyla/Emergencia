import fs from 'fs';
import path from 'path';
import { Treatment } from '../models/treatment';

// Ruta al archivo JSON
const dataPath = path.join(__dirname, '../../data/treatments.json');

export class TreatmentService {
    static getTreatments(): Treatment[] {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        return data.treatments;
    }
}
