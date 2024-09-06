"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientRoutes_1 = __importDefault(require("./routes/patientRoutes"));
const doctorRoutes_1 = __importDefault(require("./routes/doctorRoutes"));
const emergencyRoutes_1 = __importDefault(require("./routes/emergencyRoutes"));
const treatmentRoutes_1 = __importDefault(require("./routes/treatmentRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
// Rutas
app.use('/api', patientRoutes_1.default);
app.use('/api', doctorRoutes_1.default);
app.use('/api', emergencyRoutes_1.default);
app.use('/api', treatmentRoutes_1.default);
// Puesta en marcha del servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
