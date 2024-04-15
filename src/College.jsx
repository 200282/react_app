import React , {Component , useState,useEffect} from "react";
import { render } from "react-dom";
import { Person } from './person';
import Students from './Students.json';
import { json  } from "react-router-dom";


 export function College ()
{
  const [data,setdata]=useState("");
  const [d,setd]=useState([]);
  const [fild,setfild]=useState(Students);
  //d--->json data
  //data--> filter data
  var value="";
  const n = fild.map(r=>{return(<h3 >{r.name}</h3>);  }) ; 
  const i= fild.map(r=>{return(<h3 >{r.id}</h3>);  }) ; 
  const g = fild.map(r=>{return(<h3 >{r.grade}</h3>);  }) ;   
  // const f=fild.map(r=>{return(<h3 >{r.name}</h3>);  }  )   ;  
  useEffect(()=>{
  setd(Students); 
  },[]);
  
  
  const add=()=>{
    console.log("sara");
     };
  const change=(event)=>{
    const se=event.target.value;
     setdata(se);
     const filt=d.filter((dd)=>dd.name.toUpperCase().includes(se.toUpperCase()));
     setfild(filt);
   
  }
    return (
<React.Fragment>
  <br></br>
<input type="text" id="data" name="data" placeholder="enter" onChange={change}></input>
 
<h2>{fild.length===0? <p>not found</p>
:
<table>
<tr>   <th>id</th>
      <th>name</th>
      <th>grade</th>   </tr>
<td>{i}</td>
<td>{n}</td>
<td>{g}</td>
</table>}
 </h2>  

</React.Fragment>
  );
}





 



 

