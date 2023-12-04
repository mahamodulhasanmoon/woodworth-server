import User from "./user.model"

export const signupService = async (authInfo:any)=>{
    const user = await User.create(authInfo)
    
    return  user
    
    }


  export const findUserByEmail = async (email:string) => {
        return await User.findOne({ email });
      };
      
    export const findUserByToken = async (token:string) => {
        return await User.findOne({ confirmationToken: token });
      };
      export const updateUserByIdService = async (id:String,userData:Object) => {

        try {
            const data = await User.findByIdAndUpdate(id, userData)
            return   {data}
        } catch (error) {
            throw new Error(error)
        }
         
        
        }