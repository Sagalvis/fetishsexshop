import { Router } from "express";
import { pool } from "../db.js";
import * as controllimg from "../controllers/imagen.controller.js";
import * as controllProducto from "../controllers/post.controller.js"

const imgRouter = Router();
//Rutas para subir imagenes
imgRouter.get('/getProduct', controllimg.getProduct)
imgRouter.post('/postproducto',controllimg.upload.single('file') ,controllProducto.postProduct)
export default imgRouter;