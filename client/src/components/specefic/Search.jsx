import React,{useState} from 'react'
import { Dialog, DialogTitle, InputAdornment, List, ListItem, ListItemText, Stack, TextField,} from '@mui/material'

import { Search as SearchIcon } from '@mui/icons-material'
import UserItem from '../Shared/UserItem'
import { sampleUsers } from '../../constants/SampleData'
const Search = () => { 
const [searchValue,setSearchValue] = useState("") 
const addFriendHandler = (id) => {
    console.log(id)
  }
  let isLoadingSendFriendRequest = false
  const [users,setUsers] = useState(sampleUsers)
 return <Dialog open >
  <Stack padding={"2rem"} width={"25rem"} alignItems={"center"} >

    <DialogTitle> Find People</DialogTitle>
    <TextField label=""
     value={searchValue}
      onChange={(e)=>setSearchValue(e.target.value)} 
      variant='outlined'
      size='small'
      inputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        )
      }}
       />

       <List>

        {users.map((user)=>(

          <UserItem user={user} key={user._id} handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendRequest}/>


        ))}
 

       </List>


  </Stack>
 </Dialog>
}
export default Search