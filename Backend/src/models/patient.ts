import fs from 'fs'; // Importa el módulo fs (File System) para leer y escribir archivos
import path from 'path'; // Importa el módulo path para manejar rutas de archivos
import { Emergency } from './emergency'; // Importa la interfaz Emergency para ser usada en los pacientes

// Ruta del archivo JSON que contiene la información de los pacientes
const dataPath = path.join(__dirname, '../../data/patients.json');

// Definición de la interfaz Patient, que especifica la estructura de un paciente
export interface Patient {
    name: string; 
    age: number; 
    gender: string; 
    idNumber: number; 
    phone: string; 
    relativeName: string;
    relativePhone: string; 
    symptoms: string; 
    hospitalized: boolean; 
    emergencies: Emergency[]; 
    doctors: string[]; 
    treatments: string[]; 
}

// Función para obtener la lista de pacientes desde el archivo JSON
export function getPatients(): Patient[] {
    try {
        // Lee el archivo JSON y convierte el contenido en un objeto JavaScript
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        
        // Devuelve la lista de pacientes
        return data.patients;
    } catch (error) {
        // Imprime un error en la consola si hay problemas leyendo o analizando el archivo
        console.error('Error reading or parsing patients.json:', error);
        
        // Lanza un error para manejarlo externamente
        throw new Error('Error retrieving patients data');
    }
}

// Función para agregar un nuevo paciente al archivo JSON
export function addPatient(patient: Patient): void {
    try {
        // Lee el archivo JSON y convierte el contenido en un objeto JavaScript
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        
        // Agrega el nuevo paciente a la lista de pacientes
        data.patients.push(patient);
        
        // Escribe el archivo actualizado de vuelta al archivo JSON, formateado con espacios para mayor legibilidad
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        // Imprime un error en la consola si hay problemas leyendo o escribiendo el archivo
        console.error('Error reading or writing patients.json:', error);
        
        // Lanza un error para manejarlo externamente
        throw new Error('Error adding patient');
    }
}

// Función para actualizar un paciente en el archivo JSON
export function updatePatient(name: string, updatedData: Partial<Patient>): void {
    try {
        // Lee el archivo JSON y convierte el contenido en un objeto JavaScript
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        
        // Encuentra el índice del paciente con el nombre especificado
        const patientIndex = data.patients.findIndex((p: Patient) => p.name === name);
        
        // Si se encuentra el paciente, actualiza sus datos
        if (patientIndex !== -1) {
            // Actualiza los datos del paciente con la nueva información proporcionada
            data.patients[patientIndex] = { ...data.patients[patientIndex], ...updatedData };
            
            // Guarda los cambios en el archivo JSON
            fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
        } else {
            // Si no se encuentra el paciente, lanza un error
            throw new Error('Patient not found');
        }
    } catch (error) {
        // Imprime un error en la consola si hay problemas leyendo o actualizando el archivo
        console.error('Error reading or updating patients.json:', error);
        
        // Lanza un error para manejarlo externamente
        throw new Error('Error updating patient');
    }
}
