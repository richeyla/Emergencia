import express from 'express'; // Importa el módulo Express para crear el servidor y manejar las rutas
import { getDoctors, addDoctor } from '../controllers/doctorController'; // Importa los controladores para las operaciones de doctores

// Crea una instancia del enrutador de Express para manejar las rutas
const router = express.Router();

// Ruta GET para obtener la lista de doctores
router.get('/doctors', getDoctors); 
// Cuando se hace una solicitud GET a '/doctors', se ejecuta la función getDoctors

// Ruta POST para agregar un nuevo doctor
router.post('/doctors', addDoctor); 
// Cuando se hace una solicitud POST a '/doctors', se ejecuta la función addDoctor

// Exporta el enrutador para que pueda ser usado en otros archivos
export default router;
