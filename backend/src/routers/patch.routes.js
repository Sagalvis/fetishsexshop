import { Router } from "express";
import * as PatchController from "../controllers/patch.controller.js";
import * as controllimg from "../controllers/imagen.controller.js"

const PatchRouter = Router();

PatchRouter.patch('/estado/:id_producto', PatchController.DesactiveProduct);
PatchRouter.patch("/product/:id_producto", controllimg.upload.single('file'), PatchController.UpdateProducto)
export default PatchRouter;
