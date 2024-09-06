import fs from 'fs'; // Módulo para trabajar con el sistema de archivos
import path from 'path'; // Módulo para manipular rutas de archivos
import { Patient } from '../models/patient'; // Importa la interfaz de Patient

// Ruta al archivo JSON donde se almacenan los datos de pacientes
const dataPath = path.join(__dirname, '../../data/patients.json');

export class PatientService {
    // Método para obtener la lista de pacientes
    static getPatients(): Patient[] {
        // Lee el archivo JSON y lo convierte en un array de pacientes
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        // Devuelve la lista de pacientes
        return data;
    }

    // Método para agregar un nuevo paciente
    static addPatient(patient: Patient): void {
        // Lee el archivo JSON y lo convierte en un array de pacientes
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        // Añade el nuevo paciente a la lista de pacientes
        data.push(patient);
        // Sobreescribe el archivo JSON con la lista de pacientes actualizada
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
    }

    // Método para actualizar un paciente existente
    static updatePatient(id: number, updatedData: Partial<Patient>): void {
        // Lee el archivo JSON y lo convierte en un array de pacientes
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        // Busca el índice del paciente que coincida con el ID proporcionado
        const patientIndex = data.findIndex((p: Patient) => p.idNumber === id);
        if (patientIndex !== -1) {
            // Actualiza los datos del paciente con la información proporcionada
            data[patientIndex] = { ...data[patientIndex], ...updatedData };
            // Sobreescribe el archivo JSON con los datos actualizados
            fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
        }
    }
}
