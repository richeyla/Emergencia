"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTreatments = getTreatments;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
// Ruta al archivo JSON
const dataPath = path_1.default.join(__dirname, '../../data/treatment.json');
function getTreatments() {
    const data = JSON.parse(fs_1.default.readFileSync(dataPath, 'utf-8'));
    return data.treatment;
}
