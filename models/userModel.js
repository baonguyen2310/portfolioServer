import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    user_ID: {
        type: String,
        require: true
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    cart: [{
        product_ID: {
            type: String
        },
        quantity: {
            type: Number
        }
    }]
});

const userModel = mongoose.model('user', userShema, 'user');
export { userModel };