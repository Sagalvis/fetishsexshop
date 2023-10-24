import { pool } from "../db.js";

export const UpdateProducto = async(req, res) =>{
    try {
        const {id_producto } = req.params
        const file = req.file
    const imagen = {
      name: file.originalname
    }
    const {nomb_producto, descripcion} = req.body;
    const [row] = await pool.query("UPDATE productos set nomb_producto = IFNULL(?,nomb_producto), descripcion = IFNULL(?,descripcion),ruta_img = IFNULL(?,ruta_img) WHERE  id_producto = ?",[nomb_producto,descripcion,imagen.name, id_producto]) 
    res.status(200).json(row)
    } catch (error) {
        console.error(error);
    }
}