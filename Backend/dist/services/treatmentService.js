"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTreatments = getTreatments;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Ruta del JSON
const dataPath = path_1.default.join(__dirname, '../../data/treatments.json');
function getTreatments() {
    try {
        const data = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf8'));
        return data; // Devuelve el array de tratamientos directamente
    }
    catch (error) {
        console.error('Error reading or parsing treatments.json:', error);
        throw new Error('Error retrieving treatments data');
    }
}
