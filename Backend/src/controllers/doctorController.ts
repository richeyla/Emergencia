import { Request, Response } from 'express';
import { DoctorService } from '../services/dotorServices'; //importa el servicio DoctorService para manejar la lógica relacionada con los doctores

//funcion para obtener la lista de doctores
export const getDoctors = (req: Request, res: Response) => {//obtiene a los doctores que estan en doctorService
    try {
        const doctors = DoctorService.getDoctors();//envia la lita de doctores en formato json
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving doctors' });//envia ese mensaje de error
    }
};

//funcion para agregar un nuevo doctor
export const addDoctor = (req: Request, res: Response) => {
    try {
        const newDoctor = req.body;// obtiene la informacion del nuevo doctor
        DoctorService.addDoctor(newDoctor);//agrega el nuevo doctor usando DoctorService
        res.status(201).json({ message: 'Doctor added successfully' }); //se agrego correctamente
    } catch (error) {
        res.status(500).json({ message: 'Error adding doctor' });//envia error
    }
};
