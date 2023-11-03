import { Router } from "express";
import * as controllimg from "../controllers/imagen.controller.js";
import * as controllProducto from "../controllers/post.controller.js";


const Routers = Router();
//Rutas para subir imagenes
Routers.get('/getProduct', controllimg.getProduct);
Routers.get('/productdash', controllimg.getProductDash);
Routers.post('/postproducto',controllimg.upload.single('file') ,controllProducto.postProduct);

Routers.post('/user',controllProducto.PostUser);
Routers.post('/Login',controllProducto.PostLogin);
export default Routers;