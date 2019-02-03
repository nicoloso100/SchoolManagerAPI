"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profesoresController_1 = __importDefault(require("../controllers/profesoresController"));
class ProfesoresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', profesoresController_1.default.getProfesores);
        this.router.get('/:id', profesoresController_1.default.getProfesor);
        this.router.get('/profesorCompleto/:id', profesoresController_1.default.getProfesorCompleto);
        this.router.get('/deleteProfesor/:id', profesoresController_1.default.deleteProfesor);
        this.router.get('/materiasProfesor/:id', profesoresController_1.default.materiasProfesor);
        this.router.post('/saveProfesor', profesoresController_1.default.saveProfesor);
        this.router.post('/updateProfesor/:id', profesoresController_1.default.updateProfesor);
        this.router.post('/deleteMaterias', profesoresController_1.default.deleteMaterias);
        this.router.post('/saveMaterias', profesoresController_1.default.saveMaterias);
    }
}
const profesoresRoutes = new ProfesoresRoutes();
exports.default = profesoresRoutes.router;
