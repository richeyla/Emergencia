"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const emergencyController_1 = require("../controllers/emergencyController");
const router = (0, express_1.Router)();
router.get('/emergencies', emergencyController_1.getEmergenciesHandler);
exports.default = router;
