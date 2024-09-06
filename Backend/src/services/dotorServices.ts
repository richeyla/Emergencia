import fs from 'fs'; // Importa el módulo 'fs' para interactuar con el sistema de archivos
import path from 'path'; // Importa el módulo 'path' para trabajar con rutas de archivos
import { Doctor } from '../models/doctor'; // Importa la interfaz Doctor para definir el tipo de datos de los doctores

// Ruta al archivo JSON donde se almacenan los datos de los doctores
const dataPath = path.join(__dirname, '../../data/doctors.json');

// Clase DoctorService que contiene métodos estáticos para manejar la lógica de los doctores
export class DoctorService {
    // Método estático para obtener la lista de doctores
    static getDoctors(): Doctor[] {
        // Lee el archivo JSON y lo convierte a un objeto JavaScript
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        // Retorna la lista de doctores del objeto leído
        return data.doctors;
    }

    // Método estático para agregar un nuevo doctor
    static addDoctor(doctor: Doctor): void {
        // Lee el archivo JSON y convierte los datos a un objeto JavaScript
        const data = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
        // Agrega el nuevo doctor al array de doctores
        data.doctors.push(doctor);
        // Escribe el archivo JSON actualizado con la nueva lista de doctores
        fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
    }
}
