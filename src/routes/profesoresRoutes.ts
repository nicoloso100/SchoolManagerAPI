import { Router } from "express";

import profesoresController from '../controllers/profesoresController';

class ProfesoresRoutes{

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', profesoresController.getProfesores);
        this.router.get('/:id', profesoresController.getProfesor);
        this.router.get('/profesorCompleto/:id', profesoresController.getProfesorCompleto);
        this.router.get('/deleteProfesor/:id', profesoresController.deleteProfesor);
        this.router.get('/materiasProfesor/:id', profesoresController.materiasProfesor);
        this.router.post('/saveProfesor', profesoresController.saveProfesor);
        this.router.post('/updateProfesor/:id', profesoresController.updateProfesor);
        this.router.post('/deleteMaterias', profesoresController.deleteMaterias);
        this.router.post('/saveMaterias', profesoresController.saveMaterias);
    }
}

const profesoresRoutes = new ProfesoresRoutes();
export default profesoresRoutes.router;
