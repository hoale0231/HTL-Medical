// import React, { Component, useState, createRef, useEffect } from "react";
import React, { Component, createRef } from "react";
import "./chatContent.scss";
import Avatar from '../avatar/Avatar'
import ChatItem from "./ChatItem";

import image1 from '../../assets/image/guitar.jpg'
import image2 from '../../assets/image/NTLinh.jpg'

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItems = [
    {
      key: 1,
      image: image1,
      type: "me",
      msg: "Xin chào, chúng mình là HTL Medical, hãy nêu các triệu chứng của bạn?",
    },    
  ];

  constructor(props) {
    super(props);
    this.socket = props.socket
    this.state = {
      chat: this.chatItems,
      msg: "",
    };
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.key === 'Enter') {
        if (this.state.msg !== "") {
          this.chatItems.push({
            key: 1,
            type: "other",
            msg: this.state.msg,
            image: image1,
          });
          this.setState({ chat: [...this.chatItems] });
          this.socket.emit('message', this.state.msg)
          this.setState({ msg: "" });
        }
        this.scrollToBottom();
      }
    });

    this.socket.on('message', msg => {
      console.log(msg)
      this.chatItems.push({
        key: 1,
        type: "me",
        msg: msg,
        image: image2,
      });
      this.setState({ chat: [...this.chatItems] });
      this.scrollToBottom();
    })
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image= {image2}
              />
              <p>HTL Medical</p>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">
              <i className="fa fa-plus"></i>
            </button>
            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// export default function ChatContent(props){
//   const messagesEndRef = createRef(null);
//   const chatItems = [
//     {
//       key: 1,
//       image: image1,
//       type: "me",
//       msg: "Xin chào, chúng mình là HTL Medical, hãy nêu các triệu chứng của bạn?",
//     },    
//   ];

//   const { socket } = props
//   const [chat, setChat] = useState(chatItems)
//   const [currMsg, setCurrMsg] = useState("")

//   const scrollToBottom = () => {
//     messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     window.addEventListener("keydown", (e) => {
//       if (e.key === 'Enter') {
//         if (currMsg !== "") {
//           chat.push({
//             key: 1,
//             type: "other",
//             msg: currMsg,
//             image: image1,
//           });
//           setChat([...chat]);
//           socket.emit('message', currMsg)
//           setCurrMsg("");
//         }
//         scrollToBottom();
//       }
//     });
  
//     socket.on('message', msg => {
//       console.log(msg)
//       chat.push({
//         key: 1,
//         type: "me",
//         msg: msg,
//         image: image2,
//       });
//       setChat([...chat]);
//       scrollToBottom();
//     })

//   })


//   const onStateChange = (e) => {
//     setCurrMsg(e.target.value);
//   };

 
//     return (
//       <div className="main__chatcontent">
//         <div className="content__header">
//           <div className="blocks">
//             <div className="current-chatting-user">
//               <Avatar
//                 isOnline="active"
//                 image= {image2}
//               />
//               <p>HTL Medical</p>
//             </div>
//           </div>
//         </div>
//         <div className="content__body">
//           <div className="chat__items">
//             {chat.map((itm, index) => {
//               return (
//                 <ChatItem
//                   animationDelay={index + 2}
//                   key={itm.key}
//                   user={itm.type}
//                   msg={itm.msg}
//                   image={itm.image}
//                 />
//               );
//             })}
//             <div ref={messagesEndRef} />
//           </div>
//         </div>
//         <div className="content__footer">
//           <div className="sendNewMessage">
//             <button className="addFiles">
//               <i className="fa fa-plus"></i>
//             </button>
//             <input
//               type="text"
//               placeholder="Type a message here"
//               onChange={onStateChange}
//               value={currMsg}
//             />
//             <button className="btnSendMsg" id="sendMsgBtn">
//               <i className="fa fa-paper-plane"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     );
// }
