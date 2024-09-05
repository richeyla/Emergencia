import fs from 'fs';
import path from 'path';
import { Emergency } from '../models/emergency';

// Ruta al archivo JSON
const dataPath = path.join(__dirname, '../../data/emergencies.json');

export class EmergencyService {
    static getEmergencies(): Emergency[] {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        return data.emergencies;
    }

    static addEmergency(emergency: Emergency): void {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        data.emergencies.push(emergency);
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
    }
}
