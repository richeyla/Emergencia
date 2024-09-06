import fs from 'fs'; // Importa el módulo fs (File System) para leer y escribir archivos
import path from 'path'; // Importa el módulo path para manejar y resolver rutas de archivos

// Ruta del archivo JSON que contiene la información de emergencias
const dataPath = path.join(__dirname, '../../data/emergency.json');

// Definición de la interfaz Emergency, que especifica la estructura que debe tener una emergencia
export interface Emergency {
    reason: string; // Motivo de la emergencia
    // arrivalTime: string; // Hora de llegada (comentada por el momento)
    patientName: string; // Nombre del paciente involucrado en la emergencia
}

// Función para obtener la lista de emergencias desde el archivo JSON
export function getEmergencies(): Emergency[] {
    // Lee el archivo JSON y convierte el contenido en un objeto JavaScript
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    // Devuelve la lista de emergencias
    return data.emergencies;
}

// Función para agregar una nueva emergencia al archivo JSON
export function addEmergencies(emergency: Emergency): void {
    // Lee el archivo JSON y convierte el contenido en un objeto JavaScript
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    
    // Agrega la nueva emergencia al array de emergencias
    data.emergencies.push(emergency);
    
    // Escribe el objeto actualizado en el archivo JSON, formateado con espacios para mayor legibilidad
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
}
