import fs from 'fs';
import path from 'path';

//Ruta del JSON
const datePath = path.join(__dirname, '../');

export interface Doctor {
    name: string;
    specialty: string;
    patients: string[];
    treatments: string[];
}

export function getDoctors(): Doctor[]{
    const data = JSON.parse(fs.readFileSync(datePath,'utf8'));
    return data.doctors;
}

export function addDoctor(doctor: Doctor): void {
    const data = JSON.parse(fs.readFileSync(datePath,'utf8'));
    data.doctor.push(doctor);
    fs.writeFileSync(datePath, JSON.stringify(data,null,2),'utf8');
}
