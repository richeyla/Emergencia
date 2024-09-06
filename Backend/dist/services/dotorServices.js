"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoctorService = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Ruta al archivo JSON
const dataPath = path_1.default.join(__dirname, '../../data/doctors.json');
class DoctorService {
    static getDoctors() {
        const data = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf-8'));
        return data.doctors;
    }
    static addDoctor(doctor) {
        const data = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf-8'));
        data.doctors.push(doctor);
        fs_1.default.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
    }
}
exports.DoctorService = DoctorService;
