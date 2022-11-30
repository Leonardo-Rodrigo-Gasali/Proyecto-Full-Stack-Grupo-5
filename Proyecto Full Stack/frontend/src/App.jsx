// Importar los Componentes 
import ShowBlogs from "./componentes/ShowBlogs";
import {EditBlog} from "./componentes/EditBlog";
import {CreateBlog} from "./componentes/CreateBlog"; 
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";

/* Estilos */
import "./App.css";
import "./componentes/Navbar.css";


// Se debe instalar react-router-dom
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar />
      </header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowBlogs />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/edit/:id" element={<EditBlog />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}


export default App;
