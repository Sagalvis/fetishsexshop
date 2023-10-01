import { pool } from "../db.js";
import multer from "multer";

// Configuramos Multer
const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// Creamos un middleware para manejar las subidas de imágenes
export const upload = multer({ storage });

export const getProduct = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM productos");
    res.json(row);
  } catch (error) {
    return res.status(500).json({ message: "No se encontro la imagen" });
  }
};
