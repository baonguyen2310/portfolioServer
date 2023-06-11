import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
    shop_ID: {
        type: String
    },
    shop_name: {
        type: String
    },
    products: [{
        type: String
    }]
});

const shopModel = new mongoose.model('shop', shopSchema, 'shop');
export { shopModel };