import userModel from "../models/userModel.js";

const testMongoose = async (req, res) => {
    const userRecord = new userModel({
        user_ID: '001',
        username: 'bao',
        password: 'baonguyen2310'
    });
    //await userRecord.save();
    const user = await userModel.find({ user_ID: '001' });
    res.json(user);
}

export { testMongoose }