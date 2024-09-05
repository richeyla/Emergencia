import fs from 'fs';
import path from 'path';
import { Doctor } from '../models/doctor';

// Ruta al archivo JSON
const dataPath = path.join(__dirname, '../../data/doctors.json');

export class DoctorService {
    static getDoctors(): Doctor[] {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        return data.doctors;
    }

    static addDoctor(doctor: Doctor): void {
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        data.doctors.push(doctor);
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
    }
}
