import Product from "./models/product-schema.js";

import{products} from "./constants/dat2.js"
 const DefaultData = async ()=>{
    try{
    await Product.insertMany(products);
   // Product.deleteMany({});
        console.log('data uploded successfulltu');
    }catch(err){
        console.log("erroro while uploding data",err.message);

    }
}


export default DefaultData;