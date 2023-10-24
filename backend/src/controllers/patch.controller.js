import { pool } from "../db.js"

//Consulta para cambiar el estado de un producto...
export const DeleteProduct = async (req, res) => {
  try {
    const {id_producto} = req.params;
    const [row] = await pool.query('UPDATE productos SET estado = ? WHERE id_producto = ?', ['Desactivo', id_producto]);
    res.status(200).send("Eliminado con exito");
  } catch (error) {
    res.status(500).send(error);
  }
};