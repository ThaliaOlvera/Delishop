require("dotenv").config();
const express = require ('express');
const connectDb = require('./config/db');
const productRoutes = require ('./routes/productRoutes');

var cors = require('cors');

const app = express ();

app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);
console.log (process.env)
const PORT = process.env.PORT || 3000;
app.listen (PORT, ()=> console.log ('server runs on port ' + PORT));


connectDb();