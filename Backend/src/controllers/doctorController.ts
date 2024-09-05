import { Request, Response } from 'express';
import { DoctorService } from '../services/dotorServices';

export const getDoctors = (req: Request, res: Response) => {
    try {
        const doctors = DoctorService.getDoctors();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving doctors' });
    }
};

export const addDoctor = (req: Request, res: Response) => {
    try {
        const newDoctor = req.body;
        DoctorService.addDoctor(newDoctor);
        res.status(201).json({ message: 'Doctor added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error adding doctor' });
    }
};
