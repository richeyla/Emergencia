"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const dataPath = path_1.default.join(__dirname, '../../data/patients.json');
class PatientService {
    static getPatients() {
        const data = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf-8'));
        return data;
    }
    static addPatient(patient) {
        const data = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf-8'));
        data.push(patient);
        fs_1.default.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
    }
    static updatePatient(id, updatedData) {
        const data = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf-8'));
        const patientIndex = data.findIndex((p) => p.idNumber === id);
        if (patientIndex !== -1) {
            data[patientIndex] = Object.assign(Object.assign({}, data[patientIndex]), updatedData);
            fs_1.default.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
        }
    }
}
exports.PatientService = PatientService;
