import { Router } from "express";
import { pool } from "../db.js";
import * as controllimg from "../controllers/imagen.controller.js";

const imgRouter = Router();
//Rutas para subir imagenes

imgRouter.post('/imagen', controllimg.upload.single('file'), async(req, res)=>{
    const file = req.file
    console.log(file)
    const imagen = {
        name: file.originalname
    }
    await pool.query("INSERT INTO productos (ruta_img) values (?)",[imagen.name])
    res.status(200).json({
        message: 'Imagen subida correctamente'
    });
});

imgRouter.get('/getProduct', controllimg.getProduct)

export default imgRouter;