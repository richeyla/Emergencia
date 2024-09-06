import fs from 'fs';
import path from 'path';

// Ruta del JSON
const dataPath = path.join(__dirname, '../../data/emergency.json');

export interface Emergency {
    reason: string;
    patientName: string;
}

export function getEmergencies(): Emergency[] {
    try {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        return data.emergencies; // Devuelve el array de emergencias
    } catch (error) {
        console.error('Error reading or parsing emergency.json:', error);
        throw new Error('Error retrieving emergencies data');
    }
}

export function addEmergency(emergency: Emergency): void {
    try {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        data.emergencies.push(emergency);
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing to emergency.json:', error);
        throw new Error('Error adding emergency');
    }
}
