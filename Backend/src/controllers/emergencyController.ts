import { Request, Response } from 'express';
import { getEmergencies } from '../services/emergencyService';

export const getEmergenciesHandler = (req: Request, res: Response) => {
    try {
        const emergencies = getEmergencies();
        res.status(200).json(emergencies);
    } catch (error) {
        console.error('Error retrieving emergencies:', error);
        res.status(500).json({ message: 'Error retrieving emergencies' });
    }
};
