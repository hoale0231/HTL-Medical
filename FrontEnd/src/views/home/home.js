import React from 'react'
import withRouter from '../../components/withrouter/withrouter';
import logo from '../../assets/image/logo.png';
import mainImage from '../../assets/image/home_image.png'
import './home.scss'
import Button from '@mui/material/Button'

class Home extends React.Component {
    handleButtonDiseases = () => {
        this.props.router.navigate('/chatbot')
    }
    render() {
        return (
            <div className='home'>
                <img src={logo} className="htl-logo" alt="logo"/>
                <div className='advise'>
                    <h1 className='title'>Tư Vấn Sức Khỏe Tại Nhà</h1>
                    <div className='content'>HTL Medical là dịch vụ chăm sóc sức khỏe tích hợp AI để đưa ra chẩn đoán về các loại bệnh và đưa ra các phương pháp điều trị tại nhà hiệu quả và an toàn. </div>
                    <Button 
                        type='button' 
                        className='button-diagnose' 
                        variant="contained" 
                        disableElevation
                        onClick={() => this.handleButtonDiseases()}>
                        Chẩn Đoán
                    </Button>
                </div>
                <div>
                    <img className='main-image' src={mainImage} alt='mainImage'/>
                </div>
            </div>
            )
    }
}

export default withRouter(Home)