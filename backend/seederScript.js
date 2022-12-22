require("dotenv").config();

const productsData = require('./data/products');
const connectDb = require ('./config/db');
const Product= require('./models/Product');

connectDb ();

const importData = async ()=>{
    try {
        await Product.deleteMany({});

        await Product.insertMany(productsData);

        console.log ("Data import succes");

        process.exit();

    } catch (error) {
        console.log(error);
        console.error("error with data import");
        process.exit(1);
    }
};

importData();