"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDoctor = exports.getDoctors = void 0;
const dotorServices_1 = require("../services/dotorServices"); //importa el servicio DoctorService para manejar la lógica relacionada con los doctores
//funcion para obtener la lista de doctores
const getDoctors = (req, res) => {
    try {
        const doctors = dotorServices_1.DoctorService.getDoctors(); //envia la lita de doctores en formato json
        res.status(200).json(doctors);
    }
    catch (error) {
        res.status(500).json({ message: 'Error retrieving doctors' }); //envia ese mensaje de error
    }
};
exports.getDoctors = getDoctors;
//funcion para agregar un nuevo doctor
const addDoctor = (req, res) => {
    try {
        const newDoctor = req.body; // obtiene la informacion del nuevo doctor
        dotorServices_1.DoctorService.addDoctor(newDoctor); //agrega el nuevo doctor usando DoctorService
        res.status(201).json({ message: 'Doctor added successfully' }); //se agrego correctamente
    }
    catch (error) {
        res.status(500).json({ message: 'Error adding doctor' }); //envia error
    }
};
exports.addDoctor = addDoctor;
