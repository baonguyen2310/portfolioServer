import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import mysql from 'mysql2';
import { Sequelize } from "sequelize";
import mongoose from "mongoose";

import { testMongoose } from "./controllers.js/testMongoose.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(PORT, () => {
    console.log("Server Running");
})

//const mysqlConn = mysql.createConnection("mysql://root:dS0Zm9Ibor2HWkd3qXd8@containers-us-west-164.railway.app:5730/railway");

const mysqlConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.PASSWORD_MYSQL,
    database: 'facebook_clone'
});

mysqlConn.connect((err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('Connected mysql');
})

//mysqlConn.query("INSERT INTO user (user_ID, username, password) VALUES ('003', 'bao', 'baonguyen2310')");
mysqlConn.query("SELECT * FROM user WHERE user_ID='001'", (err, result, field) => {
    console.log(result);
});

mongoose.connect('mongodb://127.0.0.1:27017/facebook_clone')
    .then(() => {
        console.log('Connected mongoodb');
    })
    .catch((err) => {
        console.log(err);
    })

app.get('/test-mongoose', testMongoose);