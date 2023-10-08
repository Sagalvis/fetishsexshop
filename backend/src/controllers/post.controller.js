import { pool } from "../db.js";

export const postImg = async(req, res) => {
  const {ruta_img} = req.body;

  
}

export const postProduct = async (req, res) => {
  try {
    const {id_producto, nomb_producto, descripcion, precio} = req.body;
    const [row] = await pool.query("INSERT INTO productos (id_producto, nomb_producto, descripcion, precio) VALUES (?,?,?,?)",[ id_producto, nomb_producto, descripcion, precio])
    res.send(row)
  } catch (error) {
    console.log(error)
  }
}

