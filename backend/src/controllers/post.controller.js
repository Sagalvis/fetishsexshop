import { pool } from "../db.js";

// ruta para subir productos con imagenes 
export const postProduct = async (req, res) => {
  try {
    const file = req.file
    const imagen = {
      name: file.originalname
    }
    const {id_producto, nomb_producto, descripcion, precio} = req.body;
    const [row] = await pool.query("INSERT INTO productos (id_producto, nomb_producto, descripcion, precio, ruta_img) VALUES (?,?,?,?,?)",[ id_producto, nomb_producto, descripcion, precio, imagen.name])
    res.send(row)
  } catch (error) {
    console.log(error)
  }
}

