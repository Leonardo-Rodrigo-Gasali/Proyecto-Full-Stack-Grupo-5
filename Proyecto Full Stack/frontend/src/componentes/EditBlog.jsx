import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./StyleComponentes.css";

const url = "http://localhost:8000/blogs/"

export const EditBlog=()=>{
    const [title,setTitle]=useState("")
    const [content,setContent]=useState("") 

    const navigate=useNavigate()

    const {id} = useParams()

    // Procedimiento para actualizar/editar un blog
    const update = async(e)=>{
        e.preventDefault()
        await axios.put(url+id,{
            title:title,
            content:content
        })
        navigate("/")
    }
        // Traer contenido para editarlo para actualizar un componente
        useEffect(()=>{
            getBlogById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [])

        const getBlogById=async()=>{
            const res = await axios.get(url+id)
            setTitle(res.data.title)
            setContent(res.data.content)
    }

    return(
        <div className="container">
            <h3 className="titulo-h3">Edit Blog</h3>
            <form onSubmit={update} className="form-layout">
                <div className="mb">
                    <label className="form-label">Titulo</label>
                    <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" className="form-control" />
                </div>

                <div className="mb">
                    <label className="form-label">Contenido</label>
                    <textarea value={content} onChange={(e)=>setContent(e.target.value)} type="text" rows="5" className="form-control"/>
                </div>

                <button type="submit" className="btn btn-crear-blog">Editar</button>

            </form>
        </div>
    )
}
