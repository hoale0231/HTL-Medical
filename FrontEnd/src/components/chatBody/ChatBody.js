import React from "react";
import "./chatBody.scss";
import Search from "../search/search";
import ChatContent from "../chatContent/ChatContent";
import NavChatBot from "../nav/Nav";
import image from '../../assets/image/mess_image.png'

class ChatBody extends React.Component {
  render() {
    return (
      <>
        <div className="main__chatbody">
          <NavChatBot/>
          <Search />
          <ChatContent />
        </div>
        <div className='messimage'>
          <img src={image} alt='messimage'/>
        </div>
      </>
      
    );
  }
}

export default ChatBody
