
import React,{ useEffect, useState } from 'react'
import {Button, Container,Paper, TextField, Typography,Stack,Avatar, IconButton} from '@mui/material'
import {CameraAlt as CameraAltIcon} from "@mui/icons-material"
import { VisuallyHiddenInput } from '../components/styles/StyledComponents' 
import { usernameValidator,passwordValidator,nameValidator,bioValidator, avatarFileValidator } from '../utils'
// 
const Login = () => {
    const [isLogin,setIsLogin] = useState(true)
    const [name,setName]= useState("")
    const [password,setPassword]= useState("")
    const [bio,setBio]= useState("")
    const [username,setUsername]= useState("")
    const [avatar,setAvatar]= useState(null)
    const[avatarPreview,setAvatarPreview] = useState(null)
    const toggleLogin = () => {
        setIsLogin(!isLogin)
    }

    // avatar change
    const handleAvatarChange = (e) => {
        const file = e.target.files[0]
        if (!file){
            setAvatar(null)
        }
        if(file){
            setAvatar(file)         
        }
        const avatarError = avatarFileValidator(file)
        setErrors(prevErrors => ({
            ...prevErrors,
            avatar: avatarError
        }));
        setAvatarPreview(URL.createObjectURL(file))
    }

    useEffect(()=>{
         return () => {
            if(avatarPreview){
                URL.revokeObjectURL(avatarPreview)
            }
        }

    },[avatarPreview])

     // error messages section
     const [errors,setErrors] = useState({
        username:"",
        password:"",
        name:"",
        bio:"",
        avatar:""
     })

     // now getting error messages
     const validateFields = () =>{
        const usernameError = usernameValidator(username)
        const passwordError = passwordValidator(password)
        const nameError = nameValidator(name)
        const bioError = bioValidator(bio)
        const avatarError = avatarFileValidator(avatar)

             // setting error message
     setErrors({
        username:usernameError,
        password:passwordError,
        name:nameError,
        bio:bioError,
        avatar:avatarError     
     })

     return !usernameError && !passwordError && (!isLogin ? !nameError && !bioError && !avatarError: true)    
 }

 const handleSubmit = (e) => {
    e.preventDefault();
    if(validateFields()){
        console.log("Form Submitted")
    }
 }
//  const name = useInputValidation("")
//  const password = useInputValidation("")
//  const bio = useInputValidation("")
//  const username = useInputValidation("")
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
                }}
                onSubmit={handleSubmit}>

                    <TextField
                    required
                    fullWidth
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}              
                    />

                        {errors.username && (
                        <Typography color='error' variant='caption'>
                            {errors.username}
                        </Typography>
                    )}


                    <TextField
                    required
                    fullWidth
                    label="Password"
                    margin="normal" 
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
 
                    />

                    {errors.password && (
                        <Typography color='error' variant='caption'>
                            {errors.password}
                        </Typography>
                    )}

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
                }}
                onSubmit={handleSubmit}>

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
                        src= {avatarPreview || "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"}
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
                                <VisuallyHiddenInput type="file" onChange={handleAvatarChange} />                       
                            </>
                        </IconButton>       
                    </Stack>
                    {errors.avatar && (
                        <Typography m={"1rem"} 
                        width={"fit-content"}
                        display={"block"}
                        color='error' variant='caption'>
                            {errors.avatar}
                        </Typography>
                    )}

                    <TextField
                    required
                    fullWidth
                    label="Name"
                    margin="normal"
                    variant="outlined"
                    value={name}
                    onChange={(e) => setName(e.target.value)}     
                    /> 
                    {errors.name && (
                        <Typography color='error' variant='caption'>
                            {errors.name}
                        </Typography>
                    )}

                    <TextField
                    required
                    fullWidth
                    label="Bio"
                    margin="normal"
                    variant="outlined"
                    // value={bio.value}
                    // onChange={bio.changeHandler}
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    /> 
                    {errors.bio && (
                        <Typography color='error' variant='caption'>
                            {errors.bio}
                        </Typography>
                    )}
                    <TextField
                    required
                    fullWidth
                    label="Username"
                    margin="normal"
                    variant="outlined"
                    // value={username.value}
                    // onChange={username.changeHandler}       
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}      
                    />
                    {errors.username && (
                        <Typography color='error' variant='caption'>
                            {errors.username}
                        </Typography>
                    )}
 
                    <TextField
                    required
                    fullWidth
                    label="Password"
                    margin="normal" 
                    type="password"
                    variant="outlined"
                    // value={password.value}
                    // onChange={password.changeHandler}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />

                    {errors.password && (
                        <Typography color='error' variant='caption'>
                            {errors.password}
                        </Typography>
                    )}

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
            )}  
        </Paper>
    </Container> 
  )
}

export default Login