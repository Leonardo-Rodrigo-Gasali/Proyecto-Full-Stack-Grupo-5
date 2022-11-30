import express from "express";
import {getAllBlogs, getBlog, createBlog, updateBlog, deleteBlog} from "../controllers/blogControllers.js";

const router = express.Router();

// get para pedir información
router.get("/",getAllBlogs)  // Para ver todos los posteos
router.get("/:id",getBlog) // Para ver solo un posteo
// post para crear un post 
router.post("/",createBlog) 
// put para editar un post
router.put("/:id",updateBlog)
// delete un post
router.delete("/:id",deleteBlog) 


export default router;