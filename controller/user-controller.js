import { error } from "console";
import user from "../models/user_schema.js";


export const userSignup = async (req,res)=>{
const exist = await user.findOne({username:req.body.username});
if(exist){

    console.log('does not exist');
    res.send('exist')
}else{

 

    const newuser = new user(req.body.data)
   await newuser.save();
   console.log("newUser added")
   res.status(200).json({message:user});


}}



export const loginUser =  async (req,res)=>{
    try{

     const email= req.body.data.Lemail;
     const password = req.body.data.Lpassword;

     console.log(req.body,"this is it");

    const response = await user.findOne({email:email,password:password})
    if (response) {
       
        console.log(response,'hhhh');
        res.status(200).send(response);
    } else {
        console.log('no found')
        res.status(401).send("User not found");
    }
    

    }catch(error){
        console.log(error);
        res.status(500).send(error.message);

    }

    
}




