import React from 'react'
import { AppBar, Box ,IconButton,Toolbar, Typography } from '@mui/material'
import { orange ,} from '../../constants/color'
import {Menu as MenuIcon, Search as SearchICon,Add as AddIcon} from '@mui/icons-material';
 
const Header = () => {
  // handleMobile function
  const handleMobile = () => {
        console.log("handleMoblie")
  }  

  // open search dialog function
  const openSearchDialog = () => {
    console.log("openSearchDialog")
  }

  // open new group function
  const openNewGroup = () => {
    console.log("openNewGroup")
  }

  return (
     <>
     <Box
     sx={{
      flexGrow:1,
     }}
     height={"4rem"}

     >
      <AppBar position='static' sx={{bgcolor: orange}}>
        <Toolbar>
        <Typography variant='h6'
 
        sx={{
          display:{
            xs:"none",sm:"block",
            
          }
        }}
          >Chat-v
          </Typography>
          <Box
          sx={{
            display:{
              xs:"block",sm:"none"}}}>
                
                {/* Menu button */}
            <IconButton color='inherit' onClick={handleMobile}>
              <MenuIcon /> 
            </IconButton>
          </Box>

          <Box sx={{flexGrow:1}} /> 

          <Box>
            {/* Search button */}
          <IconButton color='inherit' size='large' onClick={openSearchDialog}>           
            <SearchICon/> 
            </IconButton>

            {/* Add button */}
            <IconButton color='inherit' size='large' onClick={openNewGroup}>
              <AddIcon/>
            </IconButton>
          </Box>

        </Toolbar>

        </AppBar>

     </Box>
     </>
  )
}

export default Header