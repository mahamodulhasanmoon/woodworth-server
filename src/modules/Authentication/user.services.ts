import bcrypt from "bcryptjs";
import User from "./user.model"
import Dealer from "./../dealers/dealers.model";

export const signupService = async (authInfo:any)=>{
    const user = await User.create(authInfo)
     await Dealer.findByIdAndUpdate(authInfo.dealerId,{isApprove:true})
    
    return  user
    
    }


  export const findUserByEmail = async (email:string) => {
        return await User.findOne({ email });
      };
      
    export const findUserByToken = async (token:string) => {
        return await User.findOne({ confirmationToken: token });
      };
      export const updateUserByIdService = async (id:String,userData:Object) => {
       const updatedData:any = userData
       updatedData.password = bcrypt.hashSync((userData as any)?.password)

        try {
            const data = await User.findByIdAndUpdate(id, userData)
            return   {data}
        } catch (error) {
            throw new Error(error)
        }
         
        
        }