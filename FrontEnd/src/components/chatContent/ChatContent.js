// import React, { Component, useState, createRef, useEffect } from "react";
import React, { Component, createRef } from "react";
import "./chatContent.scss";
import Avatar from '../avatar/Avatar'
import ChatItem from "./ChatItem";

import image1 from '../../assets/image/guitar.jpg'
import image2 from '../../assets/image/NTLinh.jpg'

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 1,
      image: image1,
      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 2,
      image: image2,
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image: image1,
      type: "",
      msg: "Hi Tim, How are you?",
    },
    // {
    //   key: 4,
    //   image: image2,
    //   type: "other",
    //   msg: "I am fine.",
    // }
    
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  scrollToBottom = () => {
    console.log('abcd')
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      console.log('key: ', e.keyCode)
      if (e.keyCode === 13) {
        if (this.state.msg !== "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image: image1,
          });
          this.setState({ chat: [...this.chatItms] });
          this.scrollToBottom();
          this.setState({ msg: "" });
        }
      }
    });
    this.scrollToBottom();
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
                  user={itm.type ? itm.type : "me"}
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
