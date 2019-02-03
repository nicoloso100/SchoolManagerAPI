import { Request, Response } from "express";

import pool from "../database";

class MateriasController{
    
    public async list(req:Request, res:Response): Promise<any>{
        try{
            const{ id } = req.params;
            const alumnos = await pool.query('CALL spGetMaterias(?)', id);
            res.json(alumnos);
        }
        catch{
            return res.json({text: 'error'});
        }
    }

    public async materia(req:Request, res:Response): Promise<any>{
        try{
            const{ id } = req.params;
            const alumnos = await pool.query('CALL spGetMateria(?)', id);
            res.json(alumnos);
        }
        catch{
            return res.json({text: 'error'});
        }
    }
    
    public async grupos(req:Request, res:Response): Promise<any>{
        try{
            const grupos = await pool.query('CALL spGetGrupos()');
            return res.json(grupos);
        }
        catch{
            return res.json({text: 'error'});
        }
    }

    public async getAutoincrement(req:Request, res:Response): Promise<any>{
        try{
            const autoincrement = await pool.query('CALL spGetAutoMaterias();');
            return res.json(autoincrement);
        }
        catch{
            return res.json({text: 'error'});
        }
    }
    
    public async getDias(req:Request, res:Response): Promise<any>{
        try{
            const dias = await pool.query('CALL spGetDias();');
            return res.json(dias);
        }
        catch{
            return res.json({text: 'error'});
        }
    }
    public async getHoras(req:Request, res:Response): Promise<any>{
        try{
            const horas = await pool.query('CALL spGetHoras();');
            return res.json(horas);
        }
        catch{
            return res.json({text: 'error'});
        }
    }
    public async saveMateria(req:Request, res:Response): Promise<any>{
        try {
            await pool.query('INSERT INTO materias SET ?', [req.body]);
            return res.json({text: 'ok'});
        }
        catch{
            return res.json({text: 'error'});
        }
    }
    public async saveHorario(req:Request, res:Response): Promise<any>{
        try {
            await pool.query('INSERT INTO horarios_materias SET ?', [req.body]);
            return res.json({text: 'ok'});
        }
        catch{
            return res.json({text: 'error'});
        }
    }
    public async deleteMateria(req:Request, res:Response): Promise<any>{
        try {
            const{ id } = req.params;
            await pool.query('call spDeleteMateria(?)', id);
            return res.json({text: 'ok'});
        }
        catch(e){
            return res.json({text: 'error'});
        }
    }
}

const materiasController = new MateriasController();
export default materiasController;