import { pool } from "../db.js";
import { encryptPassword } from "../helper/bcrypt.js";

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
    return res.status(500).json({ message: 'Algo va mal' });
  }
}
