import express from 'express';
import { getEmergencies, addEmergency } from '../controllers/emergencyController';

const router = express.Router();

router.get('/emergencies', getEmergencies);
router.post('/emergencies', addEmergency);

export default router;
