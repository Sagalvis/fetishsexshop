import { Router } from "express";
import * as PatchController from "../controllers/patch.controller.js";

const PatchRouter = Router();

PatchRouter.patch('/estado/:id_producto', PatchController.DeleteProduct);
export default PatchRouter;