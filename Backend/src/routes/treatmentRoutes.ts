import { Router } from 'express';
import { getTreatmentsHandler } from '../controllers/treatmentController';

const router = Router();

router.get('/treatments', getTreatmentsHandler);

export default router;
