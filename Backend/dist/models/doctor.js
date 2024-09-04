"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDoctors = getDoctors;
exports.addDoctor = addDoctor;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
//Ruta del JSON
const datePath = path_1.default.join(__dirname, '../');
function getDoctors() {
    const data = JSON.parse(fs_1.default.readFileSync(datePath, 'utf8'));
    return data.doctors;
}
function addDoctor(doctor) {
    const data = JSON.parse(fs_1.default.readFileSync(datePath, 'utf8'));
    data.doctor.push(doctor);
    fs_1.default.writeFileSync(datePath, JSON.stringify(data, null, 2), 'utf8');
}
