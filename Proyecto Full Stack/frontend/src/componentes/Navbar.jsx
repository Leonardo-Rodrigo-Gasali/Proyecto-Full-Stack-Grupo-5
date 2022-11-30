import { Component } from "react";
/* Stilo */
import "./Navbar.css";
/* Logo img */ 
import logo from "../logo.png";

class Navbar extends Component{

    /* Navbar Responsivo */
    state = { clicked: false };
    handleClick = () =>{
        this.setState({clicked:
        !this.state.clicked})
    }
    render(){
    return(
        <>
        <nav>
            <a href="/">
                <img src={logo} alt="logo" className="logo"/>
            </a>

            <div>
                <ul id="navbar" className={this.state.clicked ? "#navbar active" : "navbar"}>
                    <li className="active"><a href="/">Inicio</a></li>
                    <li><a href="/">Nosotros</a></li>
                </ul>
            </div>
            
            <div id="navbar-bars" onClick={this.handleClick}>
                <i id="bar" className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>

        </nav>
        </>
    );
}
}
export default Navbar;