import fs from 'fs'; // Módulo para trabajar con el sistema de archivos
import path from 'path'; // Módulo para manejar y resolver rutas de archivos

// Ruta al archivo JSON donde se almacenan los tratamientos
const dataPath = path.join(__dirname, '../../data/treatments.json');

// Definición de la interfaz que representa un tratamiento
export interface Treatment {
    treatmentId: number;            
    doctorId: number;               
    patientName: string;            
    treatmentDescription: string;   
}

// Función que obtiene todos los tratamientos del archivo JSON
export function getTreatments(): Treatment[] {
    try {
        // Lee el archivo JSON y lo convierte en un array de objetos Treatment
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        // Devuelve el array de tratamientos directamente
        return data;
    } catch (error) {
        // Muestra un error en la consola si ocurre algún problema al leer o parsear el archivo
        console.error('Error reading or parsing treatments.json:', error);
        // Lanza una excepción para notificar que hubo un error al obtener los tratamientos
        throw new Error('Error retrieving treatments data');
    }
}
