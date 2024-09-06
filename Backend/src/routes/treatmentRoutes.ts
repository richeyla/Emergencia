import { Router } from 'express'; // Importa el Router de Express para crear y manejar rutas
import { getTreatmentsHandler } from '../controllers/treatmentController'; 
// Importa el controlador que maneja la lógica para obtener tratamientos

const router = Router();// Crea una instancia del enrutador de Express

// Ruta GET para obtener la lista de tratamientos
router.get('/treatments', getTreatmentsHandler); 
// Cuando se hace una solicitud GET a '/treatments', se ejecuta la función getTreatmentsHandler

// Exporta el enrutador para que pueda ser usado en otros archivos
export default router;
