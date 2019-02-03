import { Router } from 'express';
import alumnosController from '../controllers/alumnosController'

class AlumnosRoutes{

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void{
        this.router.get('/', alumnosController.list);
        this.router.get('/:id', alumnosController.getOne);
        this.router.get('/reporte/:id', alumnosController.getReporte);
        this.router.post('/create', alumnosController.create);
        this.router.post('/saveMaterias', alumnosController.saveMaterias);
        this.router.post('/deleteMaterias', alumnosController.deleteMaterias);
        this.router.post('/saveCalificaciones', alumnosController.saveCalificaciones);
        this.router.post('/update/:id', alumnosController.update);
        this.router.post('/grupo', alumnosController.grupos);
        this.router.get('/delete/:id', alumnosController.delete);
        this.router.get('/seleccionMaterias/:id', alumnosController.seleccionMaterias);
    }
}

const alumnosRoutes = new AlumnosRoutes();
export default alumnosRoutes.router;