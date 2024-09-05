import { Request, Response } from 'express';
import { EmergencyService } from '../services/emergencyService';

export const getEmergencies = (req: Request, res: Response) => {
    try {
        const emergencies = EmergencyService.getEmergencies();
        res.status(200).json(emergencies);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving emergencies' });
    }
};

export const addEmergency = (req: Request, res: Response) => {
    try {
        const newEmergency = req.body;
        EmergencyService.addEmergency(newEmergency);
        res.status(201).json({ message: 'Emergency added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding emergency' });
    }
};
