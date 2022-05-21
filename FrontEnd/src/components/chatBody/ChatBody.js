import React from "react";
import "./chatBody.scss";
import Search from "../search/search";
import ChatContent from "../chatContent/ChatContent";
import NavChatBot from "../nav/Nav";
import image from '../../assets/image/mess_image.png'
import io from "socket.io-client";

const endPoint = "http://localhost:5000";
const socket = io.connect(endPoint)

class ChatBody extends React.Component {
  render() {
    return (
      <>
        <div className="main__chatbody">
          <NavChatBot/>
          <Search />
          <ChatContent socket={socket}/>
        </div>
        <div className='messimage'>
          <img src={image} alt='messimage'/>
        </div>
      </>
      
    );
  }
}

export default ChatBody
