import { Schema, Types, model } from "mongoose";
import validator from 'validator'
import bcrypt from "bcryptjs";

const userSchema = new Schema({
    dealerId:{
        type:Types.ObjectId,
        ref:'Dealer',
        required:[true,'User Data not Found'],
        unique:true,
    },
    name: {
        type: String,
        required: [true, "Please provide a first name"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large"],
      },

      email: {
        type: String,
        validate: [validator.isEmail, "Provide a valid Email"],
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, "Email address is required"],
      },
      role:{
        type:String,
        default: "dealer",
        
      },
      password: {
        type: String,
        required: [true, "Password is required"],
        validate: {
          validator: (value:string) =>
            validator.isStrongPassword(value, {
              minLength: 8,
              minLowercase: 1,
              minNumbers: 1,
              minUppercase: 1,
              minSymbols: 1,
            }),
          message: "Password {VALUE} is not strong enough.",
        },
      },
},{timestamps:true})

userSchema.pre('save',  async function  (next) {

    try {
  
      const password = this.password
      const hashedPassword = bcrypt.hashSync(password)
      this.password = hashedPassword
    
    
      next();
      
    } catch (error) {
      next(error);
    }
  
  })

  userSchema.methods.comparePassword = function (password:string, hash:any) {
    const isPasswordValid = bcrypt.compareSync(password, hash);
    return isPasswordValid;
  };
  
  userSchema.methods.generateConfirmationToken = function () {
    const token = (crypto as any)?.randomBytes(32).toString("hex");
  
    this.confirmationToken = token;
  
    const date = new Date();
  
    date.setDate(date.getDate() + 1);
    this.confirmationTokenExpires = date;
  
    return token;
  };

const  User = model("User", userSchema);

export default User
