import React , {Component} from "react";
import {Tool} from './Tool';
export function Carry(){
var arr=[{name:'sara said',age:22,faculty:'computer engineering'}
,{name:'sagda said',age:18,faculty:'agricultural engineering'}]

const click=()=>{console.log('clicked');}
return(
<div>
    {arr.map((e , i)=>
    { 
        return(
         <h2>
         <Tool key={i} name={e.name} click={click} />
         
                 </h2>
        )})}

</div>
)

}