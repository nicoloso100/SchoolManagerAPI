"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const alumnosController_1 = __importDefault(require("../controllers/alumnosController"));
class AlumnosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', alumnosController_1.default.list);
        this.router.get('/:id', alumnosController_1.default.getOne);
        this.router.get('/reporte/:id', alumnosController_1.default.getReporte);
        this.router.post('/create', alumnosController_1.default.create);
        this.router.post('/saveMaterias', alumnosController_1.default.saveMaterias);
        this.router.post('/deleteMaterias', alumnosController_1.default.deleteMaterias);
        this.router.post('/saveCalificaciones', alumnosController_1.default.saveCalificaciones);
        this.router.post('/update/:id', alumnosController_1.default.update);
        this.router.post('/grupo', alumnosController_1.default.grupos);
        this.router.get('/delete/:id', alumnosController_1.default.delete);
        this.router.get('/seleccionMaterias/:id', alumnosController_1.default.seleccionMaterias);
    }
}
const alumnosRoutes = new AlumnosRoutes();
exports.default = alumnosRoutes.router;
