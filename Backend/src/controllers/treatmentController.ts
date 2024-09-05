import { Request, Response } from 'express';
import { TreatmentService } from '../services/treatmentService';

export const getTreatments = (req: Request, res: Response) => {
    try {
        const treatments = TreatmentService.getTreatments();
        res.status(200).json(treatments);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving treatments' });
    }
};
