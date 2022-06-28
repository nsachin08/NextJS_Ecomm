import dbConnect from "../../utils/dbConnect"
import Product from "../../models/Product"

dbConnect();



async function findAllproducts() {
    const products = await Product.find(function (err) {
      if (err) return console.error(err);
    })
      .clone()
      .limit(100);
  
    return products;
  }

export default async (req, res) => {
  
    const posts = await findAllproducts();

    res.status(200).send(posts);
}
