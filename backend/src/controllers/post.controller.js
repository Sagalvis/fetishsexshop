import { pool } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";
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
//Query para inicio de sesion
export const PostLogin = async (req, res) => {
  try {
    const {correo, contraseña} = req.body;
    const [Login] = await pool.query('SELECT correo, contraseña rol.rol FROM Login INNER JOIN rol ON Login.rol = rol.rol WHERE correo = ?',[correo]);
    if(Login.affectedRows>0){
      const comparePassword = await bcrypt.compare(contraseña, Login[0].contraseña);
      if(comparePassword){
        const token = jwt.sing({
          id: Login[0].id,
          correo: Login[0].correo
        },
        SECRET_KEY,
        {
          expireIn: "1h",
        });
        res.status(200).json({token})
      }else{
        return res.status(400).json({msg:"Contraseña incorrecta"});
      }
    }else{
      return res.status(400).json({msg:"Usuario no existe"});
    }
  } catch (error) {
    res.status(500).json({error: error })
    
  }
}
