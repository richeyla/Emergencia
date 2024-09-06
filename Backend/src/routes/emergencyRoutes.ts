import { Router } from 'express'; // Importa el Router de Express para crear y manejar rutas
import { getEmergenciesHandler } from '../controllers/emergencyController'; // Importa el controlador para obtener emergencias

// Crea una instancia del enrutador de Express
const router = Router();

// Ruta GET para obtener la lista de emergencias
router.get('/emergencies', getEmergenciesHandler); 
// Cuando se hace una solicitud GET a '/emergencies', se ejecuta la función getEmergenciesHandler

// Exporta el enrutador para que pueda ser usado en otros archivos
export default router;
