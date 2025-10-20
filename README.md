# Focal_X_NodeJs_Task_6

# 🛍️ Express.js Product Management Server

## 📘 Project Description

This project is a simple Express.js server for managing products. It includes full CRUD operations (Create, Read, Update, Delete), custom middlewares, and a clean folder structure. Product data is stored in memory and can be exported to a JSON file using the file system.

## 📁 Project Structure

The project is organized into folders to keep the code clean and easy to maintain:

- src/controllers/: Contains the logic for handling product routes using object-oriented style.

- src/routes/: Defines the API endpoints for product operations.

- src/middlewares/: Includes custom middleware functions for logging and validation.

- src/models/: Manages the product data and provides functions to access and modify it.

- src/config/: Holds configuration files like environment setup.

- src/utils/: Contains helper functions such as file export utilities.

- app.js: The main entry point that sets up the Express server and connects everything.

## 🔧 Features and Functionality

Create an Express server with all required dependencies.

Use express.json() to parse JSON request bodies.

Use morgan middleware to log HTTP requests.

Add a custom application-level middleware to log request time, method, and URL.

Add a route-level middleware to check if a product exists before updating or deleting.

Implement full CRUD operations:

Get all products

Get a product by ID

Create a new product

Update an existing product

Delete a product

Export all products to a JSON file using the fs module.

## 🌐 API Endpoints

The server provides the following routes:

GET /products: Returns all products.

GET /products/:id: Returns a product by its ID. If not found, returns 404.

POST /products: Creates a new product with a unique ID. Returns 201.

PUT /products/:id: Updates an existing product. Returns 404 if not found.

DELETE /products/:id: Deletes a product. Returns 404 if not found.

GET /products/export/json: Saves all products to a file called products.json.

## ⚙️ Environment Setup

Create a .env file with a PORT variable (e.g. PORT=3000).

Add a .gitignore file to exclude node_modules, .env, and products.json.

Install and configure nodemon for development.

Add start and dev scripts in package.json:

"start": "node app.js"

"dev": "nodemon app.js"

## ✅ Best Practices Followed

Clear separation of concerns using folders and controllers.

Reusable middleware functions.

Clean and readable code with comments.

Proper error handling and status codes.

Easy to extend and maintain.
