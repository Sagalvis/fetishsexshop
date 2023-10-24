import express, { Router } from "express";
import cors from "cors";
import Routers from "./routers/post.routes.js"
import  {PatchRouter}  from "./routers/patch.routes.js";
import { PORT_SERVER } from "./config.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(Routers, PatchRouter );
app.use('/uploads', express.static('uploads'));

app.listen(PORT_SERVER, () => {
    console.log(`Server is running on port ${PORT_SERVER}`);
}); 






