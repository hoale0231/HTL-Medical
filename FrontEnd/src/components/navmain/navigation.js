import React from 'react'
import './navigation.scss'
import {
    NavLink
} from "react-router-dom";

class Navigation extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink exact={'true'} to="/" activeclassname="active">Trang Chủ</NavLink>
                <NavLink to="/intro" activeclassname="active">Giới Thiệu</NavLink>
                <NavLink to="/diseases" activeclassname="active">Bệnh Và Phương Pháp Điều Trị</NavLink>
                <NavLink to="/contact" activeclassname="active">Liên Hệ</NavLink>
            </div>
        )
    }
}

export default Navigation