"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPatients = getPatients;
exports.addPatient = addPatient;
exports.updatePatient = updatePatient;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Ruta del JSON
const dataPath = path_1.default.join(__dirname, '../../data/patients.json');
function getPatients() {
    try {
        const data = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf8'));
        return data.patients; // Asegúrate de que devuelves la lista de pacientes
    }
    catch (error) {
        console.error('Error reading or parsing patients.json:', error);
        throw new Error('Error retrieving patients data');
    }
}
function addPatient(patient) {
    try {
        const data = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf8'));
        data.patients.push(patient);
        fs_1.default.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
    }
    catch (error) {
        console.error('Error reading or writing patients.json:', error);
        throw new Error('Error adding patient');
    }
}
function updatePatient(name, updatedData) {
    try {
        const data = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf8'));
        const patientIndex = data.patients.findIndex((p) => p.name === name);
        if (patientIndex !== -1) {
            data.patients[patientIndex] = Object.assign(Object.assign({}, data.patients[patientIndex]), updatedData);
            fs_1.default.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
        }
        else {
            throw new Error('Patient not found');
        }
    }
    catch (error) {
        console.error('Error reading or updating patients.json:', error);
        throw new Error('Error updating patient');
    }
}
