import React from 'react'
import { AppBar, Box ,IconButton,Toolbar, Tooltip, Typography } from '@mui/material'
import { orange ,} from '../../constants/color'
import {Menu as MenuIcon, Search as SearchIcon,Add as AddIcon,
 Group as GroupIcon,}from '@mui/icons-material';
 import { useNavigate } from 'react-router-dom';
 
const Header = () => {
const navigate = useNavigate();

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

  // navigate to group function
  const navigateToGroup = () => {
    console.log("navigateToGroup")
    navigate("/group")
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
            <IconBtn title={"Search"} icon={<SearchIcon/>} onClick={openSearchDialog}/>
            {/* New group button */}
            <IconBtn title={"New Group"} icon={<AddIcon/>} onClick={openNewGroup}/>
            {/* Group button */} 
            <IconBtn title={"Groups"} icon={<GroupIcon/>} onClick={navigateToGroup}/>

        </Box>

        </Toolbar>

        </AppBar>

     </Box>
     </>
  )
}

const IconBtn = ({title , icon , onClick}) => {
  return(
    <Tooltip title={title}>
    <IconButton color='inherit' size='large' onClick={onClick}>
      {icon}
    </IconButton>
  </Tooltip>
)} 

export default Header