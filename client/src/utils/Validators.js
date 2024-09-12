// import {isValidUsername} from "6pp"

// export const usernameValidator = (username) => {
//     if(!isValidUsername(username))
//         return {isValid:false, errorMessage:"Invalid username"}  
// }

export const usernameValidator = (username) =>{
    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    if(!username) return "username is required"
    if(!usernameRegex.test(username)) return "Username must be 3-15 characters and can only contain letters, numbers, and underscores";
    return "";
}

export const passwordValidator = (password) =>{
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!password) return "Password is required"
    if(!passwordRegex.test(password)) return "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character";
    return "";
}
export const confirmPasswordValidator = (password, confirmPassword) =>{
    if(password !== confirmPassword) return "Passwords do not match"
    return "";
}

export const nameValidator = (name) => {
    const nameRegex = /^[a-zA-Z\s]{2,}$/;
    if (!name) return "Name is required";
    if (!nameRegex.test(name)) return "Name must be at least 2 characters and can only contain letters and spaces";
    return "";
};

export const bioValidator = (bio) => {
    if (!bio) return "Bio is required";
    if (bio.length > 150) return "Bio must be less than 150 characters";
    return "";
};

export const avatarFileValidator = (file) => {
    const allowedFormats = ['image/jpeg', 'image/png', 'image/gif'];
    const maxSize = 5;
    if (!file) return "Avatar is required";
    if (!allowedFormats.includes(file.type)) return "Only JPEG, PNG, and GIF files are allowed";
    if (file.size > maxSize * 1024 * 1024) return `File size must be less than ${maxSize} MB`;
    
    return "";
}


