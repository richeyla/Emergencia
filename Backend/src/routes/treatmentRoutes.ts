import express from 'express';
import { getTreatments } from '../controllers/treatmentController';

const router = express.Router();

router.get('/treatments', getTreatments);

export default router;
