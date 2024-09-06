"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const treatmentController_1 = require("../controllers/treatmentController");
const router = (0, express_1.Router)();
router.get('/treatments', treatmentController_1.getTreatmentsHandler);
exports.default = router;
