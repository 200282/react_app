import React , { useState ,Component} from "react";
import { JitsiMeeting   } from "@jitsi/react-sdk";
//import { Jitsi , JitsiMeetExternalApi} from './Jitsi';
//import { JitsiMeetExternalApi } from '@jitsi/react-sdk/lib/types';



 export function Footer(){
    const [nam,setnam]=useState("");
    const [api,setapi]=useState([]);
     
    var data=(event)=>{
        setnam(event.target.value)
        console.log(nam)
    }
    var create=()=>
    { console.log("create")
        return(
        <div>
        </div>)}
var domain="meet.jit.si/good1";
var roomName="good1";

//api=new window.JitsiMeetExternalAPI(domain,roomName)
//var d=api.getParticipantsInfo();
//console.log(d);
    return(
        <React.Fragment>
   <input type="text" name="uname" onLoadedData={data} ></input>
   <button onClick={create}> create meeting </button>
   <br></br>
<br></br>
   <JitsiMeeting
        domain="meet.jit.si/good1"
        roomName="good1"
        getIFrameRef={node => [node.style.height='600px', node.style.width='100%' ] }
        configOverwrite={{ prejoinPageEnable:false,
            
            DISABLE_JOIN_LEAVE_NOTIFICATIONS:true}} 
        userInfo={{displayName:'sara'}} 
        onApiReady={(ex)=>{console.log("listen")}}
       
         />
         

</React.Fragment>

    )
}