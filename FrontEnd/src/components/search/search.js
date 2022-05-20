import React from "react";
import "./search.scss";
import Button from '@mui/material/Button';
// import PageviewIcon from '@mui/icons-material/Pageview';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import ChatListItems from "./ChatListItems";

class Search extends React.Component {
  render() {
    return (
      <>
        <Box
          className='box-search'
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Tìm kiếm trong tin nhắn" variant="outlined" /><br/>
          <Button className='btn-search' variant="contained">
            SEARCH
          </Button>
        </Box>
      </>
      
    );
  }
}

export default Search