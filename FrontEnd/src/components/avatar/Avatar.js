import React from "react";
import './avatar.scss'
class Avatar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="avatar">
        <div className="avatar-img">
          <img src={this.props.image} alt="#" />
        </div>
        <span className={`isOnline ${this.props.isOnline}`}></span>
      </div>
    );
  }
}
export default Avatar