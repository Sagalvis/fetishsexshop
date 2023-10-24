import { Router } from "express";
import * as controllimg from "../controllers/imagen.controller.js"
import * as PacthController from "../controllers/patch.controller.js"

export const PatchRouter = Router()

PatchRouter.patch("/product/:id_producto", controllimg.upload.single('file'), PacthController.UpdateProducto)
