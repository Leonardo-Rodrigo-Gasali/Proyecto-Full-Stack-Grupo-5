import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StyleComponentes.css";

const url = "http://localhost:8000/blogs/"

export const CreateBlog=()=>{
    // si useState esta vacio el form aparece en blanco
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("")

    const navigate=useNavigate()

    // Procedimiento para gurdar/crear en BD
    const crear  = async(e)=>{
    e.preventDefault()
        await axios.post(url,{
            title:title,
            content:content
                            }
        )
        // Para enviarnos hacia ruta inicial
        navigate("/")
    }

    return(
        <div className="container">
       
            <h3 className="titulo-h3">Crear Blog</h3>
            <form onSubmit={crear} className="form-layout">

                <div className="mb">
                    <label className="form-label">Titulo</label>
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control" placeholder="Ingrese un titulo"/>
                </div>

                <div className="mb">
                    <label className="form-label">Contenido</label>
                    <textarea value={content} onChange={(e)=>setContent(e.target.value)} type="text" className="form-control" rows="7" placeholder="Ingrese un contenido"/>
                </div>

                <button type="sumbit" className="btn btn-crear-blog">Crear</button>

            </form>

            

        </div>
    )

}