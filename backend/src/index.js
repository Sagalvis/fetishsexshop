import express, { Router } from "express";
import cors from "cors";
import imgRouter from "./routers/post.routes.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(imgRouter);

app.listen(3005, () => {
    console.log(`Server is running on port 3005`);
}); 






