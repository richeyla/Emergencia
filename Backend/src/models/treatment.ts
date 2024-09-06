import fs from 'fs'; // Importa el módulo fs para leer y escribir archivos
import path from 'path'; // Importa el módulo path para manejar rutas de archivos

// Ruta al archivo JSON que contiene la información de los tratamientos
const dataPath = path.join(__dirname, '../../data/treatment.json');

// Definición de la interfaz Treatment, que describe la estructura de un tratamiento
export interface Treatment {
    treatmentId: number;         
    doctorId: number;             
    patientName: string;          
    treatmentDescription: string; 
}

// Función para obtener la lista de tratamientos desde el archivo JSON
export function getTreatments(): Treatment[] {
    // Lee el archivo JSON, convierte el contenido en un objeto JavaScript
    const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
    
    // Devuelve la lista de tratamientos
    return data.treatment;  // Asegúrate de que en el JSON, la clave sea "treatment"
}
