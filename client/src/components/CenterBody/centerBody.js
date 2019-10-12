import React from "react";
import axios from "axios";

import {Route} from "react-router-dom";
import MessageInput from './MessageInput.js'

// import "./centerBody.css"
import Board from "../Board";
// class MessageBoard extends React.Component{
//     constructor(props){
//       super(props)
//     }


    
//     postMessage(messageText){
//       if(!messageText){
//           return
//       }
//       axios.post('/messageboard/message', {
//           messageText: messageText
//       })
//       .then(response => {
//           console.log(response)
//       })
//     }
  
//     handleMessageSubmit = (event) => {
//       this.postMessage(document.getElementById('new-message').value)
//       event.preventDefault()
//     }
//     render() {
//       return (
//           <MessageInput handleMessageSubmit={this.handleMessageSubmit}/>
  
//       );
//     }
//   }
const CenterBody = props => 
    <div className="centerBody">{props.children}
        <div className="BoardContainer">

            <Route 
                path="/forum" 
                render={ ()=> <Board user={props.user}/> }
            />
            
        </div>
    </div>

export default CenterBody;
