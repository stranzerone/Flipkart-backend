import  express  from "express";
import dotenv from "dotenv"
import Connections from "./database/monogdb.js";
import DefaultData from "./default.js"
import router from "./routes/route.js"
import cors from 'cors'
import bodyParser from "body-parser";



const app = express()
app.use(bodyParser.json());


app.use( "*", cors({origin: ["http://localhost:3000","https://flipkartclone-9ez7.onrender.com"], credentials: true }));

dotenv.config();
const URL = process.env.DATABASE;

Connections(URL);


app.use('/',router);





app.listen(5000,()=>{
    console.log("server is running on 5000")
})


DefaultData();