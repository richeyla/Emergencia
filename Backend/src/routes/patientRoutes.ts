import express from 'express'; // Importa el módulo Express para manejar rutas y solicitudes
import { getPatients, addPatient, updatePatient } from '../controllers/patientController'; // Importa las funciones del controlador de pacientes

const router = express.Router();// Crea una instancia del enrutador de Express

router.get('/patients', getPatients); // Ruta GET para obtener la lista de pacientes
// Cuando se hace una solicitud GET a '/patients', se ejecuta la función getPatients

// Ruta POST para agregar un nuevo paciente
router.post('/patients', addPatient); 
// Cuando se hace una solicitud POST a '/patients', se ejecuta la función addPatient

// Ruta PUT para actualizar un paciente existente basado en su nombre
router.put('/patients/:name', updatePatient); 
// Cuando se hace una solicitud PUT a '/patients/:name', se ejecuta la función updatePatient

export default router;// Exporta el enrutador para que pueda ser utilizado en otros módulos
