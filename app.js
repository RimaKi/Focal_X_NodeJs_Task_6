require('dotenv').config();
// import ProductController from '../controllers/product.controller';

const express = require('express');
const morgan = require('morgan');
const app = express();
const appMiddleware = require("./src/middlewares/app.middleware")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use(appMiddleware);
app.use("/products",require("./src/routes/product.routes"))


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT} successfully`);
});
