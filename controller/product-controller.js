import Product from "../models/product-schema.js";



export const products = async (req,res)=>{

    try{
    const products = await  Product.find({})
    if(products){
      res.status(200).send(products);
    }
  }catch(error){
    res.staus(500).send(error.message)

  }
}
  

export const productDetails = async(req,res)=>{
try{
const id = req.params.id;
console.log(id,'id found');
const product =  await Product.findOne({id:id})

res.status(200).send(product);
}catch(error){
  res.staus(500).send(error.message)


}

}
