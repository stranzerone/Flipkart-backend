import user from "../models/user_schema.js";


export const userSignup = async (req,res)=>{

const exist = user.findOne(req.body.username);

try{
    const data = req.body.data;
    const newuser = new user(data)
   await newuser.save();
   res.status(200).json({message:user});

}catch(error){
    console.log(error)
    res.status(500).json({message:error.message})
}
}



export const loginUser =  async (req,res)=>{
    try{

     const email= req.body.data.username;
     const password = req.body.data.Lpassword;

     console.log(req.body,"this is it");

    const response = await user.findOne({username:username,password:password})
    if (response) {
       
        console.log(response.status);
        res.status(200).send(response);
    } else {
        res.status(401).send("User not found");
    }
    

    }catch(error){
        console.log(error);
        res.status(500).send(error.message);

    }

    
}




