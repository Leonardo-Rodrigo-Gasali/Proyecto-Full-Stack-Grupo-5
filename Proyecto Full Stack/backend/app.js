import express from "express";
import cors from "cors";
import blogRoutes from "./routes/blogRoutes.js"
import db from "./database/db.js";


// Traigo los metodos y rutas de express con los que voy a trabajar
const app = express()

// Se utiliza para configurar información
app.use(cors());
app.use(express.json()); // Analiza las solicitudes JSON entrantes y coloca los datos analizados en formato req.body

// Utilizar las rutas desc . Rutas deben ir debajo de cors & express
app.use("/blogs",blogRoutes);

/* 
// localhost  Usar nodemon app.js para levantar el backend
app.get("/",(req,res)=>{
    res.send("Ok Desde el Servidor");
})
 */


// Base de datos
try{
    await db.authenticate()  // Envia información si esta ok
    console.log("Conexión a la BD OK");
}catch (error){
    console.log("Conexión fallida por el errror ${error}");
}


// Puerto para levantar servidor   Verificar las comillas funciona igual!!
const port = 8000;
app.listen(port,()=>{
    console.log("Servidor ok en el puerto ${port}");
});