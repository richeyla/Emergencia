import fs from 'fs'; // Importa el módulo fs (File System) para leer y escribir archivos
import path from 'path'; // Importa el modulo path para manejar y resolver rutas de archivos

// Ruta del archivo JSON que contiene la informacion de los doctores
const datePath = path.join(__dirname, '../../data/doctors.json');

// Definicion de la interfaz Doctor, que especifica la estructura que debe tener un doctor
export interface Doctor {
    name: string; 
    specialty: string; 
    patients: string[]; 
    treatments: string[]; 
}

// Función para obtener la lista de doctores desde el archivo JSON
export function getDoctors(): Doctor[] {
    // Lee el archivo JSON y convierte el contenido en un objeto JavaScript
    const data = JSON.parse(fs.readFileSync(datePath, 'utf8'));
    
    // Devuelve la lista de doctores
    return data.doctors;
}

// Función para agregar un nuevo doctor al archivo JSON
export function addDoctor(doctor: Doctor): void {
    // Lee el archivo JSON y convierte el contenido en un objeto JavaScript
    const data = JSON.parse(fs.readFileSync(datePath, 'utf8'));
    
    // Agrega el nuevo doctor al array de doctores
    data.doctor.push(doctor);
    
    // Escribe el objeto actualizado en el archivo JSON, formateado con espacios para mayor legibilidad
    fs.writeFileSync(datePath, JSON.stringify(data, null, 2), 'utf8');
}
