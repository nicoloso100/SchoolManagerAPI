import { Router } from 'express';
import materiasController from '../controllers/materiasController'

class MateriasRoutes{

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/:id', materiasController.list);
        this.router.post('/agregaMateria', materiasController.saveMateria);
        this.router.post('/agregaMateria/horario', materiasController.saveHorario);
        this.router.get('/agregaMateria/increment', materiasController.getAutoincrement);
        this.router.get('/agregaMateria/dias', materiasController.getDias);
        this.router.get('/agregaMateria/horas', materiasController.getHoras);
        this.router.get('/eliminaMateria/:id', materiasController.deleteMateria);
        this.router.get('/selecciona/:id', materiasController.materia);
        this.router.get('/grupos/getGrupos', materiasController.grupos);
    }
}

const materiasRoutes = new MateriasRoutes();
export default materiasRoutes.router;