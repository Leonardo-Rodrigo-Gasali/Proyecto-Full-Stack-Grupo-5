// Para traer los metodos para configurar la conexión a la BD
import { Sequelize } from "sequelize";

// Crear una nueva conexión	con la BD
const db = new Sequelize ("socialmedia","root","fajtARjfadfsc",{
    host:"localhost",
    dialect:"mysql",
    port: 3306
})

export default db;
