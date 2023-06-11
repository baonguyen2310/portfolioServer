import mongoose from "mongoose";
import { userModel } from "../models/userModel.js";
import { productModel } from "../models/productModel.js";
import { shopModel } from "../models/shopModel.js";

const testMongoose = async (req, res) => {
    const product1 = new productModel({
        product_ID: "P01",
        product_name: "quan xi"
    });

    const product2 = new productModel({
        product_ID: "P02",
        product_name: "quan xa lon"
    });

    const shop = new shopModel({
        shop_ID: "S01",
        shop_name: "Shop Quan",
        products: [
            "P01", "P02"
        ]
    });

    const user = new userModel({
        user_ID: '001',
        username: 'bao',
        password: 'baonguyen2310',
        cart: [
            {
                product_ID: "001",
                quantity: 3
            },
            {
                product_ID: "002",
                quantity: 4
            }
        ]
    });
    await product1.save();
    await product2.save();
    await shop.save();
    await user.save();
    // const user = await userModel.find({ user_ID: '001' });
    // res.json(user);
}

export { testMongoose }