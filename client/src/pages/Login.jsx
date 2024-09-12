
import React, { useState } from 'react'
import {Button, Container,Paper, TextField, Typography,Stack,Avatar, IconButton} from '@mui/material'
import {CameraAlt as CameraAltIcon} from "@mui/icons-material"
import { VisuallyHiddenInput } from '../components/styles/StyledComponents'
import {useInputValidation} from "6pp"

const Login = () => {
    const [isLogin,setIsLogin] = useState(true)
    const toggleLogin = () => {
        setIsLogin(!isLogin)
    }

 const name = useInputValidation("")
 const password = useInputValidation("")
 const bio = useInputValidation("")
 const username = useInputValidation("")


  return (

    <Container component={"main"} maxWidth="xs"
    sx={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100vh"
    }} >
        <Paper elevation={3}
        sx={{
             padding:4,
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
        }}
        >
        {
            isLogin ? (
                <>
                <Typography variant="h5" component="h2">Login</Typography> 
                <form style={{
                    width:"100%",
                    marginTop:"1rem"
                }}>
                    <TextField
                    required
                    fullWidth
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    value={username.value}
                    onChange={username.changeHandler}
                    />
                    <TextField
                    required
                    fullWidth
                    label="Password"
                    margin="normal" 
                    type="password"
                    variant="outlined"
                    value={password.value}
                    onChange={password.changeHandler}
                    />

                    <Button
                    type="submit"
                    sx={{marginTop:"1rem"}}
                    variant="contained"
                    color="primary"
                     
                    fullWidth
                    >Login</Button>

                    <Typography
                    textAlign={"center"}
                    m={"1rem"}
                    >OR</Typography>
                    <Button
                    
                    fullWidth
                    variant='text'
                    onClick={toggleLogin}
                    
                    >
                        Sign Up Instead
                    </Button>
                    
                </form>
                </>
            ) : (
                <>
                <Typography variant="h5" component="h2">Sign Up</Typography> 
                <form style={{
                    width:"100%",
                    marginTop:"1rem"
                }}>

                    <Stack 
                    position={"relative"}
                    width={"10rem"}
                    margin={"auto"}
                    >
                        <Avatar
                        sx = {{
                            width:"10rem",
                            height:"10rem",
                            objectFit:"contain"
                        }}
                        />
                        <IconButton sx={{
                            position:"absolute",
                            color:"white",
                            bottom:0,
                            right:0,
                            bgcolor:"rgba(0,0,0,0.5)",
                            ":hover" : {
                                bgcolor:"rgba(255, 255, 255, 0.7)"
                            
                            }
                        }} 
                        component={"label"}
                        >
                            <>
                            <CameraAltIcon/>
                                <VisuallyHiddenInput type="file" />
                            
                            </>
                        </IconButton>

                        
                    </Stack>



                    <TextField
                    required
                    fullWidth
                    label="Name"
                    margin="normal"
                    variant="outlined"
                    value={name.value}
                    onChange={name.changeHandler}
            
                    /> 

                    <TextField
                    required
                    fullWidth
                    label="Bio"
                    margin="normal"
                    variant="outlined"
                    value={bio.value}
                    onChange={bio.changeHandler}
                    /> 
                    <TextField
                    required
                    fullWidth
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    value={username.value}
                    onChange={username.changeHandler}             
                    />
                    <TextField
                    required
                    fullWidth
                    label="Password"
                    margin="normal" 
                    type="password"
                    variant="outlined"
                    value={password.value}
                    onChange={password.changeHandler}
                    />

                    <Button
                    type="submit"
                    sx={{marginTop:"1rem"}}
                    variant="contained"
                    color="primary"
                     
                    fullWidth
                    >Sign Up</Button>

                    <Typography
                    textAlign={"center"}
                    m={"1rem"}
                    >OR</Typography>
                    <Button
                    
                    fullWidth
                    variant='text'
                    onClick={toggleLogin}                   
                    >
                        Login Instead
                    </Button>
                    
                </form>
                </>
 
            )
        }  
        </Paper>

    </Container>
    

  )
}

export default Login