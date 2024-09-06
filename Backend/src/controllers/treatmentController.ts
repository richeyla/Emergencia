import { Request, Response } from 'express';
import { getTreatments } from '../services/treatmentService';

export const getTreatmentsHandler = (req: Request, res: Response) => {
    try {
        const treatments = getTreatments();
        res.status(200).json(treatments);
    } catch (error) {
        console.error('Error retrieving treatments:', error);
        res.status(500).json({ message: 'Error retrieving treatments' });
    }
};
