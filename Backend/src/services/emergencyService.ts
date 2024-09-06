import fs from 'fs'; // Importa el módulo 'fs' para trabajar con el sistema de archivos
import path from 'path'; // Importa el módulo 'path' para manejar rutas de archivos

// Ruta al archivo JSON donde se almacenan las emergencias
const dataPath = path.join(__dirname, '../../data/emergency.json');

// Define la interfaz Emergency que describe la estructura de una emergencia
export interface Emergency {
    reason: string; // Razón de la emergencia
    patientName: string; // Nombre del paciente involucrado en la emergencia
}

// Función para obtener la lista de emergencias
export function getEmergencies(): Emergency[] {
    try {
        // Lee el archivo JSON y lo convierte en un objeto JavaScript
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        // Devuelve la lista de emergencias del archivo JSON
        return data.emergencies;
    } catch (error) {
        // Muestra un error si ocurre un problema al leer o parsear el archivo
        console.error('Error reading or parsing emergency.json:', error);
        // Lanza un error si hay un problema al obtener los datos
        throw new Error('Error retrieving emergencies data');
    }
}

// Función para agregar una nueva emergencia
export function addEmergency(emergency: Emergency): void {
    try {
        // Lee el archivo JSON y convierte su contenido en un objeto JavaScript
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        // Agrega la nueva emergencia al array de emergencias
        data.emergencies.push(emergency);
        // Sobreescribe el archivo JSON con la lista actualizada de emergencias
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        // Muestra un error si ocurre un problema al escribir en el archivo
        console.error('Error writing to emergency.json:', error);
        // Lanza un error si hay un problema al agregar la emergencia
        throw new Error('Error adding emergency');
    }
}
