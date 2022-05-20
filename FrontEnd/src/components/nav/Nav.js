import React from "react";
import "./nav.scss";
import logo from '../../assets/image/icon.png';

class NavChatBot extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__blocks">
          <img src={logo} alt='logo-htl'></img>
        </div>
        <div className="nav__blocks"></div>
        <div className="nav__blocks"></div>
      </div>
    );
  }
}

export default NavChatBot
