// Importar la conexión a la BD

import db from "../database/db.js";


// Sequelize

import {DataTypes} from "sequelize";
// Se define la tabla
const BlogModel = db.define("blogs",{
    title:{type:DataTypes.STRING},
    content:{type:DataTypes.STRING}
})

export default BlogModel;