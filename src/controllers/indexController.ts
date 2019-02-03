import { Request, Response } from "express";

class IndexController{

    index(req:Request, res:Response){
        res.send('API funcionando');
    }

}

const indexController = new IndexController();
export default indexController;