import React , {Component , useState,useContext, createContext} from "react";
import { Home } from "./Home";
import { Link } from "react-router-dom";
import './Main.css';
export const m = createContext();
export function Main(){
   
    return(
        <React.Fragment>
<nav class="nav"> 
<ul>
<Link to="/foot" >footer</Link>
</ul>
<ul>
<Link to="/head" >header</Link>
</ul>
<ul>
<Link to="/" >home</Link>
</ul>
<ul>
<Link to="/students" >Students</Link>
</ul>
</nav>
<h2>hello every one</h2>
</React.Fragment>
    )
}