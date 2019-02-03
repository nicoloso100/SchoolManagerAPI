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
class ProfesoresController {
    getProfesores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const profesores = yield database_1.default.query('CALL spGetProfesores()');
            res.json(profesores);
        });
    }
    saveProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO profesores SET ?', [req.body]);
                return res.json({ text: 'ok' });
            }
            catch (e) {
                return res.send(e);
                return res.json({ text: 'error' });
            }
        });
    }
    getProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const profesor = yield database_1.default.query('CALL spGetProfesor(?)', [id]);
                return res.json(profesor[0]);
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    deleteProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.query('CALL spDeleteProfesor(?)', [id]);
                return res.json({ text: 'ok' });
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    getProfesorCompleto(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const profesor = yield database_1.default.query('CALL spGetProfesorCompleto(?)', [id]);
                return res.json(profesor[0]);
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    updateProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.query('UPDATE profesores SET ? WHERE prof_codigo = ?', [req.body, id]);
                return res.json({ text: 'ok' });
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    materiasProfesor(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const materias = yield database_1.default.query('CALL spGetMateriasProfesor(?)', [id]);
                return res.json(materias);
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    deleteMaterias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('DELETE FROM profesores_has_materias WHERE profesores_prof_codigo = ?', [req.body]);
                return res.json({ text: 'ok' });
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    saveMaterias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO profesores_has_materias VALUES(?,?)', [req.body[0], req.body[1]]);
                return res.json({ text: 'ok' });
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
}
const profesoresController = new ProfesoresController();
exports.default = profesoresController;
