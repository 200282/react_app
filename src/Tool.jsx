import React , {Component} from "react";
//import { render } from "react-dom";
import { Carry } from './Carry';
export function Tool({name,click})
{
const handclick=()=>{click();}
return(
    <React.Fragment>
  <p> {name}</p>
    <button onClick={handclick}> showmore  </button>
  </React.Fragment>
    );

}


