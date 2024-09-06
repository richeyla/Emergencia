//importa los tipos req y resp de Express(solicitud y respuestas)
import { Request, Response } from 'express';
//importa la funcion getEmergencies, esta maneja la logica de los registros de emergencia
import { getEmergencies } from '../services/emergencyService';

// define una funcion controladora que maneja las solicitudes de los datos de emergencias
export const getEmergenciesHandler = (req: Request, res: Response) => {
    try {
        //llama a la funcion para recuperar todos los datos registros de emergencias
        const emergencies = getEmergencies();
        // si es exitoso, manda un estado 200 y la lista ya hecha en el .JSON
        res.status(200).json(emergencies);
    } catch (error) {
        //error en optener la info de las listas de emergencia
        console.error('Error retrieving emergencies:', error);
        //error por fallo en el servidor
        res.status(500).json({ message: 'Error retrieving emergencies' });
    }
};
