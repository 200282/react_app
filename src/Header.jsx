import React , {Component} from "react";
import { JitsiMeeting , JaaSMeeting   } from "@jitsi/react-sdk";
import {JitsiMeetJS } from "lib-jitsi-meet";
import { JitsiMeetExternalApi } from '@jitsi/react-sdk/lib/types';
export function Header(){
    const domain='meet.jit.si';
    const roomname="sara";
    const jwtt='doaa';
const config={
   defaultLanguage:'en',
enableclosepage:true,
video:{
    height:'600px'
}, jwt:jwtt,
}

    
    return(
<React.Fragment>
<h1>welcome guyes</h1>
<JitsiMeeting domain={domain} roomname={roomname} config={config}/>
</React.Fragment>
    )
}