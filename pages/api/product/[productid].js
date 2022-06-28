
import dbConnect from "../../../utils/dbConnect"
import Product from "../../../models/Product"

dbConnect();




export default async (req, res) => {
    
    const {productid} = req.query;

    try {
        const product = await Product.findById(productid);
        res.status(200).json(product);
    }
    catch{
        res.status(400);
    }

}
