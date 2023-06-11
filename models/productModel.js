import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    product_ID: {
        type: String
    },
    product_name: {
        type: String
    }
});

const productModel = mongoose.model('product', productSchema, 'product');
export { productModel };