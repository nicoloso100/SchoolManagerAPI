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
class AlumnosController {
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const alumnos = yield database_1.default.query('CALL spGetAlumnos()');
            res.json(alumnos);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const alumno = yield database_1.default.query('CALL spGetAlumno(?)', [id]);
                return res.json(alumno[0]);
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO alumnos SET ?', [req.body]);
                return res.json({ text: 'ok' });
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.query('UPDATE alumnos SET ? WHERE alum_codigo = ?', [req.body, id]);
                return res.json({ text: 'ok' });
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    grupos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const grupos = yield database_1.default.query('CALL spGetGrupos();');
            if (grupos.length > 0) {
                return res.json(grupos);
            }
            return res.json({ text: 'no se han encontrado grupos' });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                yield database_1.default.query('CALL spDeleteAlumno(?)', [id]);
                return res.json({ text: 'ok' });
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    seleccionMaterias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const alumno = yield database_1.default.query('CALL spGetMateSelect(?)', [id]);
                return res.json(alumno);
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    saveMaterias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('INSERT INTO alumnos_has_materias VALUES(?,?,?,?)', [req.body[0], req.body[1], req.body[2], req.body[3]]);
                return res.json({ text: 'ok' });
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    deleteMaterias(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('DELETE FROM alumnos_has_materias WHERE alumnos_alum_codigo = ?', [req.body]);
                return res.json({ text: 'ok' });
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    saveCalificaciones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield database_1.default.query('UPDATE alumnos_has_materias SET alumate_primer_periodo = ?, alumate_segundo_periodo = ? WHERE materias_mate_id = ?', [req.body['alumate_primer_periodo'], req.body['alumate_segundo_periodo'], req.body['materias_mate_id']]);
                return res.json({ text: 'ok' });
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
    getReporte(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const alumno = yield database_1.default.query('CALL spGetReporte(?)', [id]);
                return res.json(alumno[0]);
            }
            catch (_a) {
                return res.json({ text: 'error' });
            }
        });
    }
}
const alumnosController = new AlumnosController();
exports.default = alumnosController;
