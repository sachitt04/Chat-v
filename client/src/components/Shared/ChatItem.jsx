import React, { memo } from 'react'
 import { Link } from '../styles/StyledComponents'
 import { Box, Stack, Typography } from '@mui/material'

const ChatItem = ({
  avatar = [],
  name,
  _id,
  // LastMessage,
  // LastOnline,
  groupChat = false,
  sameSender,
  isOnline,
  newMessageAlert,
  index = 0,
  handleDeleteChatOpen,

}) => {
  return (
     <Link 
     sx={{
      padding: "0",
     }} to={`/chat/${_id}`} onContextMenu={(e) => handleDeleteChatOpen(e,_id, groupChat) }>
      <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: sameSender ? "black" : "unset" ,
        color: sameSender ? "#fff" : "unset" ,
        cursor: "pointer",
        gap: "1rem",
        position : "relative",

      }}
      >
        {/* avtarcard */}
        <Stack>
          <Typography>{name}</Typography>
          {
            newMessageAlert &&( 
            <Typography>{newMessageAlert.count} New Message</Typography>
          )
          }
        </Stack>       
        {
          isOnline && (
            <Box 
            sx={{
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "green",
              position: "absolute",
              top: "10px",
              right: "10px",
              transform: "translateY(-50%)",
            }}
            />
          )
        }

      </div>
     </Link>
  )
}

export default memo(ChatItem)