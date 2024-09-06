import { Request, Response } from 'express'; 
import { getTreatments } from '../services/treatmentService'; 

// Función controladora para manejar las solicitudes que obtienen la lista de tratamientos
export const getTreatmentsHandler = (req: Request, res: Response) => {
    try {
        // Llama a la función getTreatments para obtener todos los tratamientos
        const treatments = getTreatments();
        
        // Si la llamada es exitosa, responde con un estado 200 (OK) y la lista de tratamientos en formato JSON
        res.status(200).json(treatments);
    } catch (error) {
        // Si ocurre un error, imprime el mensaje de error en la consola para depuración
        console.error('Error retrieving treatments:', error);
        
        // Responde con un estado 500 (Error interno del servidor) y un mensaje de error en formato JSON
        res.status(500).json({ message: 'Error retrieving treatments' });
    }
};
