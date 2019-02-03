"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class MateriasController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const alumnos = yield database_1.default.query('CALL spGetMaterias(?)', id);
                res.json(alumnos);
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    materia(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const alumnos = yield database_1.default.query('CALL spGetMateria(?)', id);
                res.json(alumnos);
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    grupos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const grupos = yield database_1.default.query('CALL spGetGrupos()');
                return res.json(grupos);
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    getAutoincrement(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const autoincrement = yield database_1.default.query('CALL spGetAutoMaterias();');
                return res.json(autoincrement);
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    getDias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const dias = yield database_1.default.query('CALL spGetDias();');
                return res.json(dias);
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    getHoras(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const horas = yield database_1.default.query('CALL spGetHoras();');
                return res.json(horas);
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    saveMateria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO materias SET ?', [req.body]);
                return res.json({ text: 'ok' });
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    saveHorario(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO horarios_materias SET ?', [req.body]);
                return res.json({ text: 'ok' });
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    deleteMateria(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.query('call spDeleteMateria(?)', id);
                return res.json({ text: 'ok' });
            }
            catch (e) {
                return res.json({ text: 'error' });
            }
        });
    }
}
const materiasController = new MateriasController();
exports.default = materiasController;
