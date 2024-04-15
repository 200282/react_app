import React , {Component,useState} from "react";
import { College } from './College';
import {Header} from'./Header';
import {Footer} from'./Footer'
import {Main} from'./Main';
import {Home} from'./Home';
import { BrowserRouter,Router,Route, Routes } from "react-router-dom";
export function Person () 
{
  const [counter,setcounter] =useState(0)
  const plus=()=>{setcounter(counter+1)}
  const minus=()=>{setcounter(counter-1)}

 
  return (<React.Fragment>
    <BrowserRouter>
    <Main/>
  <Routes>
    
    <Route path="/head" element={<Header/>}/>
    <Route path="/foot" element={<Footer/>}/>
    <Route path="/"element={<Home/>}/>
    <Route path="/students"element={<College/>}/>
    </Routes>
  </BrowserRouter>

  
  
 
  </React.Fragment>
  )
}
    

  





