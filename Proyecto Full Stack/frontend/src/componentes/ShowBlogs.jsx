import axios from "axios";
import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./StyleComponentes.css";


const url = "http://localhost:8000/blogs/"

// Componente
const ShowBlogs =()=>{

    const [blogs,setBlog]= useState([])

    useEffect(()=>{
        getBlogs()
    },[])

// Procedimiento para mostrar todos los Blogs

const getBlogs = async()=>{
    const res = await axios.get(url)
    setBlog(res.data)
}

// Procedimiento para eliminar un blog `` alt+96
const deleteBlog = async(id)=>{
    await axios.delete(`${url}${id}`)
    getBlogs()
}

return(
    <div className="container">
        <div className="row">
            <div className="col">
                <small className="titulo-h3">Crear Blog</small>
                <Link to="/create" className="btn btn-primary"><i class="fa-regular fa-address-book"></i></Link>
            <table className="table">
                <thead className="table-titulos">
                    <tr>
                        <th>Id</th>
                        <th>Titulo</th>
                        <th>Contenido</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
       
            <tbody className="filas-style">
                {blogs.map((blog)=>(
                    <tr key={blog.id}>
                        <td>{blog.id}</td>
                        <td>{blog.title}</td>
                        <td>{blog.content}</td>
                        <td>
                            <Link to={`/edit/${blog.id}`} className="btn btn-edit"><i class="fa-solid fa-file-pen"></i></Link>
                            <button onClick={()=>deleteBlog(blog.id)} className="btn btn-delete"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>
                ))}
            </tbody>

            </table>

            </div>
        </div>
    </div>
)

}

export default ShowBlogs;