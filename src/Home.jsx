import React , {Component , useContext , useEffect, useState} from "react";
import { json } from "react-router-dom";
import {m} from "./Main"
import { Main } from './Main';
import Students from './Students.json';

export function Home(){
  const n = Students.map(r=>{return(<h3 >{r.name}</h3>);  }) ; 
  const i= Students.map(r=>{return(<h3 >{r.id}</h3>);  }) ; 
  const g = Students.map(r=>{return(<h3 >{r.grade}</h3>);  }) ;   
            
   return(<React.Fragment>
<table>
<tr><th>id</th>
<th>name</th>
<th>grade</th>
</tr>
<td>{i}</td>
<td>{n}</td>
<td>{g}</td>
</table>
<input type="text" ></input >
</React.Fragment>
    )}