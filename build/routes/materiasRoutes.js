"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const materiasController_1 = __importDefault(require("../controllers/materiasController"));
class MateriasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/:id', materiasController_1.default.list);
        this.router.post('/agregaMateria', materiasController_1.default.saveMateria);
        this.router.post('/agregaMateria/horario', materiasController_1.default.saveHorario);
        this.router.get('/agregaMateria/increment', materiasController_1.default.getAutoincrement);
        this.router.get('/agregaMateria/dias', materiasController_1.default.getDias);
        this.router.get('/agregaMateria/horas', materiasController_1.default.getHoras);
        this.router.get('/eliminaMateria/:id', materiasController_1.default.deleteMateria);
        this.router.get('/selecciona/:id', materiasController_1.default.materia);
        this.router.get('/grupos/getGrupos', materiasController_1.default.grupos);
    }
}
const materiasRoutes = new MateriasRoutes();
exports.default = materiasRoutes.router;
