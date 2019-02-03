import { Request, Response } from "express";

import pool from "../database";

class AlumnosController{

    public async list(req:Request, res:Response): Promise<any>{
        const alumnos = await pool.query('CALL spGetAlumnos()');
        res.json(alumnos);
    }

    public async getOne(req:Request, res:Response): Promise<any>{
        try{
            const { id } = req.params;
            const alumno = await pool.query('CALL spGetAlumno(?)', [id]);
            return res.json(alumno[0]);
        }
        catch{
            return res.json({text: 'error'});
        }
    }

    public async create(req:Request, res:Response): Promise<any>{
        try {
            await pool.query('INSERT INTO alumnos SET ?', [req.body]);
            return res.json({text: 'ok'});
        }
        catch{
            return res.json({text: 'error'});
        }
    }

    public async update(req:Request, res:Response): Promise<any>{
        try {
            const { id } = req.params;
            await pool.query('UPDATE alumnos SET ? WHERE alum_codigo = ?', [req.body, id]);
            return res.json({text: 'ok'});
        }
        catch{
            return res.json({text: 'error'});
        }
    }
    
    public async grupos(req:Request, res:Response): Promise<any>{
        const grupos = await pool.query('CALL spGetGrupos();');
        if(grupos.length > 0 ){
            return res.json(grupos);
        }
        return res.json({text: 'no se han encontrado grupos'});
    }

    public async delete(req:Request, res:Response): Promise<any>{
        try {
            const { id } = req.params;
            await pool.query('CALL spDeleteAlumno(?)', [id]);
            return res.json({text: 'ok'});
        }
        catch{
            return res.json({text: 'error'});
        }
    }

    public async seleccionMaterias(req:Request, res:Response): Promise<any>{
        try{
            const { id } = req.params;
            const alumno = await pool.query('CALL spGetMateSelect(?)', [id]);
            return res.json(alumno);
        }
        catch{
            return res.json({text: 'error'});
        }
    }

    public async saveMaterias(req:Request, res:Response): Promise<any>{
        try {
            await pool.query('INSERT INTO alumnos_has_materias VALUES(?,?,?,?)', [req.body[0],req.body[1],req.body[2],req.body[3]]);
            return res.json({text: 'ok'});
        }
        catch{
            return res.json({text: 'error'});
        }
    }

    public async deleteMaterias(req:Request, res:Response): Promise<any>{
        try {
            await pool.query('DELETE FROM alumnos_has_materias WHERE alumnos_alum_codigo = ?', [req.body]);
            return res.json({text: 'ok'});
        }
        catch{
            return res.json({text: 'error'});
        }
    }

    public async saveCalificaciones(req:Request, res:Response): Promise<any>{
        try {
            await pool.query('UPDATE alumnos_has_materias SET alumate_primer_periodo = ?, alumate_segundo_periodo = ? WHERE materias_mate_id = ?', [req.body['alumate_primer_periodo'],req.body['alumate_segundo_periodo'],req.body['materias_mate_id']]);
            return res.json({text: 'ok'});
        }
        catch{
            return res.json({text: 'error'});
        }        
    }
    public async getReporte(req:Request, res:Response): Promise<any>{
        try{
            const { id } = req.params;
            const alumno = await pool.query('CALL spGetReporte(?)', [id]);
            return res.json(alumno[0]);
        }
        catch{
            return res.json({text: 'error'});
        }
    }
}

const alumnosController = new AlumnosController();
export default alumnosController;