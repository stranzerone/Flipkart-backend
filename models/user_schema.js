import mongoose from "mongoose";

const user = new mongoose.Schema({
fname:{
    required:true,
    min:2,
    max:10,
    type:String,
    trim:true
},
lname:{
    required:true,
    min:2,
    max:10,
    type:String,
    trim:true
},
username:{
    required:true,
   unique:true,
    type:String,
    trim:true,
 
},
email:{
    required:true,
    unique:true,
    type:String,
    trim:true,
    lowercase:true,
},
password:{
    required:true,
    min:4,
    max:20,
    type:String,
    trim:true,
    unique:true
},
phonenumber:{
    required:true,
    
    type:String,
   
},
}
)
const User = mongoose.model("User", user);


export default User;
