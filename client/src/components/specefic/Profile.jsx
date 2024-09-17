import { Avatar, Stack } from '@mui/material'
import React from 'react'

const Profile = () => {
  return (
    <Stack
    spacing={"2rem"}
    direction={"column"}
    alignItems={"center"}
    >
        <Avatar 
        sx={{
            width:"10rem",
            height:"10rem"
        }}
        />

    </Stack>
  )
}

const ProfileCard = () => {
  return (
    <div>ProfileCard</div>
  )
}   

export default Profile