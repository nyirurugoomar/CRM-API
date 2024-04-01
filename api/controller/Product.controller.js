import Product from "../models/product.model.js";


export const getProduct = (req ,res) =>{
    Product.find()
    .then((products) =>{
        res.json(products)
    })
    .catch((error) =>{
        res.status(500).json({error: error.message})
    })
}

//create Product

export const createProduct = async (req,res) =>{
    const {ProductName,ProductSpecs,ProductPrice} = req.body;

    if(!ProductName || !ProductSpecs || !ProductPrice === undefined){
        return res.status(400).json({error: "Missing or invalid fields"})
    }


    try{
        const product = new Product({
            ProductName,
            ProductSpecs,
            ProductPrice,
        })
        const saveProduct = await product.save()
        res.json(saveProduct)
    }catch(error){
        res.status(500).json({error: error.message})
    }
}

export const updateProduct = (req, res) => {
    Product.findOneAndUpdate(
      { _id: req.params.productID },
      {
        $set: {
          ProductName: req.body.ProductName,
          ProductSpecs: req.body.ProductSpecs,
          ProductPrice: req.body.ProductPrice,
          
        },
      },
      { new: true }
    )
      .then((updatedProduct) => {
        if (!updatedProduct) {
          return res.status(404).json({ error: "Product not found" });
        }
        res.json(updatedProduct);
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  };

  export const deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.productID })
      .then((result) => {
        if (result.deletedCount === 0) {
          return res.status(404).json({ error: "Product not found" });
        }
        res.json({ message: "Product Deleted" });
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
  };

