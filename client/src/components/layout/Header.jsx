import React, { lazy, Suspense } from 'react'
import { useState } from 'react'
import { AppBar, Box ,IconButton,Toolbar, Tooltip, Typography } from '@mui/material'
import { orange ,} from '../../constants/color'
import {Menu as MenuIcon, Search as SearchIcon,Add as AddIcon,
Group as GroupIcon, Notifications as Notification}from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const Search = lazy(()=> import("../specefic/Search"))
const NewGroup = lazy(()=> import("../specefic/NewGroup"))
const Notifications = lazy(()=> import("../specefic/Notifications"))

const Header = () => {
const navigate = useNavigate();

const [isMobile,setIsMoblie] = useState(false)
const [isSearch,setIsSearch] = useState(false)
const [isGroup,setIsGroup] = useState(false)
const [isNotification,setIsNotification] = useState(false)

  // handleMobile function
  const handleMobile = () => {
        console.log("handleMoblie")
        setIsMoblie((prev)=>!prev)
  }  

  // open search dialog function
  const openSearchDialog = () => {
    console.log("openSearchDialog")
    setIsSearch((prev)=>!prev)
  }

  // open new group function
  const openNewGroup = () => {
    console.log("openNewGroup")
    setIsGroup((prev)=>!prev)
  }

  // navigate to group function
  const navigateToGroup = () => {
    // console.log("navigateToGroup")
    navigate("/group")
  }

  // navigate to notification function
  const  notifications = () => {
    console.log("navigateToNotification")
    setIsNotification((prev)=>!prev)
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
            {/* Notification button */}
            <IconBtn title={"Notifications"} icon={<Notification/>} onClick={notifications}/>
            </Box>

        </Toolbar>

        </AppBar>

     </Box>

     {isSearch && (
         <Suspense fallback={<div>Loading...</div>}>
         <Search/>
         </Suspense>
      )}
      {isGroup && (
         <Suspense fallback={<div>Loading...</div>}>
         <NewGroup/>
         </Suspense>
      )}
      {isNotification && (
         <Suspense fallback={<div>Loading...</div>}>
         <Notifications/>
         </Suspense>
      )}
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