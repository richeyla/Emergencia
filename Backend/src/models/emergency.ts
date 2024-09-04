import fs from 'fs';
import path from 'path';

//Ruta del JSON
const dataPath = path.join(__dirname, '../');

export interface Emergency {
    reason:string;
    // arrivalTime: string;
    patientName:string;
}
export function getEmergencies(): Emergency[]{
    const data = JSON.parse(fs.readFileSync(dataPath,'utf8'));
    return data.emergencies;
}

export function addEmergencies(emergency:Emergency): void{
    const data = JSON.parse(fs.readFileSync(dataPath,'utf8'));
    data.emergencies.push(emergency);
    fs.writeFileSync(dataPath, JSON.stringify(data,null,2),'utf8');
}