"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmergencies = getEmergencies;
exports.addEmergencies = addEmergencies;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
//Ruta del JSON
const dataPath = path_1.default.join(__dirname, '../../data/emergency.json');
function getEmergencies() {
    const data = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf8'));
    return data.emergencies;
}
function addEmergencies(emergency) {
    const data = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf8'));
    data.emergencies.push(emergency);
    fs_1.default.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
}
