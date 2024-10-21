const express = require('express');
const dotenv = require('dotenv');
const userRouter = require('./Routers/userRouter.js'); 
const productRouter = require('./Routers/productsRouter.js')
const mongoose = require("mongoose");
const cors = require('cors');
const app = express();

// Middlewares
dotenv.config();
app.use(cors());
app.use(express.json({ limit: '40kb' }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/v1/user', userRouter);
app.use("/api/v1/product", productRouter);

app.get('/', (req, res) => {
    res.send('Namaste world');
});



const port = process.env.PORT || 8080;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    console.log("connected to DB");
}

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});
