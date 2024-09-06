import { Router } from 'express';
import { getEmergenciesHandler } from '../controllers/emergencyController';

const router = Router();

router.get('/emergencies', getEmergenciesHandler);

export default router;
