import fs from 'fs';
import path from 'path';
import { Emergency } from './emergency';

//Ruta del JSON
const dataPath = path.join(__dirname, '../../data/patients.json');

export interface Patient {
    name:string;
    age:number;
    gender: string;
    cedula:number;
    phone: string;
    relativeName: string;
    relativePhone:string;
    symptoms:string;
    hospitalized:boolean;
    emergencies: Emergency[];
    doctors:string[];
    treatments:string[];
}

export function getPatients(): Patient[]{
    const data = JSON.parse(fs.readFileSync(dataPath,'utf8'));
    return data;
}

export function addPatient(patient: Patient):void {
    const data = JSON.parse(fs.readFileSync(dataPath,'utf8'));
    data.patients.push(patient);
    fs.writeFileSync(dataPath,JSON.stringify(data,null,2), 'utf8')
}
export function updatePatient(name:string,updatedData:Partial<Patient>): void{
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    const patientIndex = data.patient.fiendIndex((p:Patient) => p.name === name);
    if (patientIndex !== -1){
        data.patients[patientIndex] = {...data.patients[patientIndex], ...updatedData};
        fs.writeFileSync(dataPath, JSON.stringify(data,null,2), 'utf-8');
    }
}