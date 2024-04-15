import React , {Component , useContext , useEffect, useState,useRef} from "react";




export function Home(){

  const [stream,setstream]=useState();
  const myvideo=useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({video:true,audio:true}).then(
      (stream)=>{
      
          if(myvideo.current){
         myvideo.current.srcObject = stream;
   console.log("stream  :  ",stream);
   setstream(stream);
     }});

  },[]);

   return(<React.Fragment>
 <video   className="video"
playsInline
muted
ref={myvideo}
autoPlay
style={{ width: "700px",margin:"6px" , display:"inline-block"}}


/>

</React.Fragment>
    )}