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
//Ruta del JSON
const dataPath = path_1.default.join(__dirname, '../');
function getPatients() {
    const data = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf8'));
    return data.patients;
}
function addPatient(patient) {
    const data = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf8'));
    data.patients.push(patient);
    fs_1.default.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
}
function updatePatient(name, updatedData) {
    const data = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf-8'));
    const patientIndex = data.patient.fiendIndex((p) => p.name === name);
    if (patientIndex !== -1) {
        data.patients[patientIndex] = Object.assign(Object.assign({}, data.patients[patientIndex]), updatedData);
        fs_1.default.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
    }
}
