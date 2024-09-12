
import React, { useState } from 'react'
import {Button, Container,Paper, TextField, Typography} from '@mui/material'

const Login = () => {
    const [isLogin,setIsLogin] = useState(true)
    const toggleLogin = () => {
        setIsLogin(!isLogin)
    }

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
                    />
                    <TextField
                    required
                    fullWidth
                    label="Password"
                    margin="normal" 
                    type="password"
                    variant="outlined"
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
                    >Or</Typography>
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

                    <Stack position={"relavtive"} width={"10rem"} margin={"auto"} >
                        <Avtar
                        sx={{
                            width:"10rem",
                            height:"10rem",
                            objectFit:"cover"
                        }}
                        ></Avtar>
                    </Stack>
                    <TextField
                    required
                    fullWidth
                    label="Name"
                    margin="normal"
                    variant="outlined"
                    />

                    <TextField  
                    required
                    fullWidth
                    label="Bio"
                    margin="normal"
                    variant="outlined"
                    />

                    <TextField
                    required
                    fullWidth
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    />
                    <TextField
                    required
                    fullWidth
                    label="Password"
                    margin="normal" 
                    type="password"
                    variant="outlined"
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
                    >Or</Typography>
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