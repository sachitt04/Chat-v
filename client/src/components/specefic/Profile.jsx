import { Avatar, Stack ,Typography } from '@mui/material'
import React from 'react'
import { Face as FaceIcon,
     AlternateEmail as UsernameIcon,
     CalendarMonth as CalenderIcon } from '@mui/icons-material'
import moment from "moment"

const Profile = () => {
  return (
    <Stack
    spacing={"2rem"}
    direction={"column"}
    alignItems={"center"}
    >
        <Avatar 
        sx={{
            width:"12.5rem",
            height:"12.5rem",
            objectFit:"contain",
            marginBottom:"1rem",
            border:"0.4rem solid white"
        }}
        />
        <ProfileCard heading={"bio"} text={"are yar"}  />
        <ProfileCard heading={"username"} text={"shitsachit"} Icon={<UsernameIcon/>} />
        <ProfileCard heading={"Name"} text={"Sachit"} Icon={<FaceIcon/>}/>
        <ProfileCard heading={"Joined"} text={moment('2024-09-17T00:00:00.000Z').fromNow()} Icon={ <CalenderIcon/>}/>

        
        
    </Stack>
  )
}

const ProfileCard = ({text,Icon,heading}) => 
    <Stack
    direction={"row"} 
    alignItems={"center"}
    spacing={"1rem"} 
    color={"white"} 
    textAlign={"center"}
    >
        {Icon && Icon }
        
        <Stack>
            <Typography variant='body1'>{text}</Typography>
            <Typography color={"grey"} variant="caption" >{heading}</Typography>
        </Stack>
    </Stack> 

export default Profile