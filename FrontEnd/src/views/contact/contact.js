import React from 'react'
import './contact.scss'
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined'
import CallIcon from '@mui/icons-material/Call'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import FacebookIcon from '@mui/icons-material/Facebook';
// import FormFeedback from '../../components/form/form'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

class Contact extends React.Component {
    render() {
        return(
            <div className='contact'>
                <div className='information'>
                    <h2 className='title'>
                        THÔNG TIN LIÊN HỆ
                    </h2>
                    <div className='detail'>
                        <HomeWorkOutlinedIcon/> <span>Thành phố Hồ Chí Minh &emsp; &emsp; &emsp;</span><CallIcon/> <span>0123456789</span><br/>
                        <MailOutlineIcon/> <span>aibi.cidi@hcmut.edu.vn &emsp; &emsp; &emsp; &nbsp;</span><FacebookIcon/> <span>https://www.facebook.com/thailinh.cs19/</span><br/>
                    </div>
                </div>
                <div className='feedback'>
                    <h3 className='title-feedback'>
                        &nbsp;GỬI LỜI NHẮN CHO CHÚNG TÔI
                    </h3>
                    <div className='form-feedback'>
                        <Box
                            className='form-detail'
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                            >
                            <TextField className='name' id="standard-basic" label="Tên của bạn" variant="standard" />
                            <TextField className='email' id="standard-basic" label="Email của bạn" variant="standard" /><br/>
                            <TextField
                                className='content'
                                id="filled-multiline-static"
                                label="Nội dung"
                                multiline
                                rows={4}
                                // defaultValue="Default Value"
                                variant="filled" />
                        </Box>
                        
                        <Button className='button-send' variant="contained" endIcon={<SendIcon />}>
                            GỬI ĐI
                        </Button>
                    </div>
                </div>
            </div>
        )
    }       
}

export default Contact