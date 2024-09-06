"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientController_1 = require("../controllers/patientController");
const router = express_1.default.Router();
router.get('/patients', patientController_1.getPatients);
router.post('/patients', patientController_1.addPatient);
router.put('/patients/:name', patientController_1.updatePatient);
exports.default = router;
