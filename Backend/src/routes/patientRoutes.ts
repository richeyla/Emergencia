import express from 'express';
import { getPatients, addPatient, updatePatient } from '../controllers/patientController';

const router = express.Router();

router.get('/patients', getPatients);
router.post('/patients', addPatient);
router.put('/patients/:name', updatePatient);

export default router;
