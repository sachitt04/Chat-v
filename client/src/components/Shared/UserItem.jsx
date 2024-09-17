import { ListItem ,ListItemText ,Avatar, Typography, IconButton,Stack} from '@mui/material'
import React, { memo } from 'react'
import { Add as AddIcon } from '@mui/icons-material'

const UserItem = ({user,handler,handlerIsLoading}) => {
    const {name,_id,avatar} = user;

  return (
     <ListItem>
         <Stack direction={"row"} spacing={"1rem"} alignItems={"center"} width={"100%"} >
            <Avatar/>
            <Typography variant='body1' sx={{
                flexGlow:1,
                display:"-webkit-box",
                WebkitLineClamp:1,
                webkitBoxOrient:"vertical",
                overflow:"ellipsis",
                width:"100%"
            }} >
                {name}
                </Typography>
            <IconButton
            size='small'
            sx={{
                bgcolor:"primary.main"
                ,color:"white",
                "&:hover":{bgcolor:"primary.dark"}
            }}
             onClick={()=> handler(_id)} disabled={handlerIsLoading}>
                <AddIcon/>
            </IconButton>
         </Stack>
     </ListItem>
  )
}

export default memo(UserItem)