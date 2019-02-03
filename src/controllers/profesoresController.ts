import { Request, Response } from "express";

import pool from "../database";

class ProfesoresController{

    public async getProfesores(req:Request, res:Response){
        const profesores = await pool.query('CALL spGetProfesores()');
        res.json(profesores);
    }

    public async saveProfesor(req:Request, res:Response): Promise<any>{
        try {
            await pool.query('INSERT INTO profesores SET ?', [req.body]);
            return res.json({text: 'ok'});
        }
        catch(e){
            return res.send(e)
            return res.json({text: 'error'});
        }
    }
    public async getProfesor(req:Request, res:Response): Promise<any>{
        try{
            const { id } = req.params;
            const profesor = await pool.query('CALL spGetProfesor(?)', [id]);
            return res.json(profesor[0]);
        }
        catch{
            return res.json({text: 'error'});
        }
    }
    public async deleteProfesor(req:Request, res:Response): Promise<any>{
        try {
            const { id } = req.params;
            await pool.query('CALL spDeleteProfesor(?)', [id]);
            return res.json({text: 'ok'});
        }
        catch{
            return res.json({text: 'error'});
        }
    }
    public async getProfesorCompleto(req:Request, res:Response): Promise<any>{
        try{
            const { id } = req.params;
            const profesor = await pool.query('CALL spGetProfesorCompleto(?)', [id]);
            return res.json(profesor[0]);
        }
        catch{
            return res.json({text: 'error'});
        }
    }

    public async updateProfesor(req:Request, res:Response): Promise<any>{
        try {
            const { id } = req.params;
            await pool.query('UPDATE profesores SET ? WHERE prof_codigo = ?', [req.body, id]);
            return res.json({text: 'ok'});
        }
        catch{
            return res.json({text: 'error'});
        }
    }
    public async materiasProfesor(req:Request, res:Response): Promise<any>{
        try{
            const { id } = req.params;
            const materias = await pool.query('CALL spGetMateriasProfesor(?)', [id]);
            return res.json(materias);
        }
        catch{
            return res.json({text: 'error'});
        }
    }

    public async deleteMaterias(req:Request, res:Response): Promise<any>{
        try {
            await pool.query('DELETE FROM profesores_has_materias WHERE profesores_prof_codigo = ?', [req.body]);
            return res.json({text: 'ok'});
        }
        catch{
            return res.json({text: 'error'});
        }
    }
    public async saveMaterias(req:Request, res:Response): Promise<any>{
        try {
            await pool.query('INSERT INTO profesores_has_materias VALUES(?,?)', [req.body[0],req.body[1]]);
            return res.json({text: 'ok'});
        }
        catch{
            return res.json({text: 'error'});
        }
    }
}

const profesoresController = new ProfesoresController();
export default profesoresController;