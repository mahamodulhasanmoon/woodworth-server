import jwt from 'jsonwebtoken'

export const genarateToken = (userInfo:any)=>{

    const payload = {
      email :  userInfo.email,
      role:userInfo.role
    }

    const token = jwt.sign(payload , process.env.TOKEN_SECRET,{
        expiresIn:'24hr'
    });
    return token;

};