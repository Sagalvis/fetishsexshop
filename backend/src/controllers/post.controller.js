import { pool } from "../db.js";
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config.js";
import { encryptPassword } from "../helper/bcrypt.js";
import bcrypt from 'bcryptjs';
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
    const [Login] = await pool.query('SELECT correo, contraseña, rol.rol FROM Login INNER JOIN rol ON Login.idrol = rol.idrol WHERE correo = ?',[correo]);
    const passquery = Login[0].contraseña
    if(Login){
      const comparePassword = await bcrypt.compare(contraseña, passquery);
      if(comparePassword){
        const token = jwt.sign({
          correo: Login[0].correo
        },
        SECRET_KEY,
        {
          expiresIn: "1h",
        });
        res.status(200).json({token})
      }else{
        return res.status(400).json({msg:"Contraseña incorrecta"});
      }
    }else{
      return res.status(400).json({msg:"Usuario no existe"});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({error: error })
  }
}
export const PostUser = async( req, res ) =>{
  try {
    const{correo, contraseña, idrol} = req.body;
    const encrypt = await encryptPassword(contraseña)
    const[row] = await pool.query("INSERT INTO Login(correo,contraseña,idrol)VALUES(?,?,?)",[correo,encrypt,idrol])
    return res.json({
      id:row.insertId,
      correo,
      contraseña,
      idrol,
      message:"usuario registrado con exito"
    })
  } catch (error) {
    console.error(error); // Puedes agregar un registro del error para debug
    return res.status(500).json({ message: 'Algo va mal'});
  }
}
