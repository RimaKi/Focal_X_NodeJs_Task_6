let productHelper = require('../utils/fileUtils');
const fs = require('fs');

class ProductController {
  add(req, res) {
    try {
      const { name, category, description } = req.body;
      const price = parseFloat(req.body.price);

      if (!name || !price || !category) {
        res.status(400).json({
          success: false,
          message: 'Name, price and category are required.',
        });
      }

      if (isNaN(price) || price < 0) {
        throw new Error('faild the price');
      }

      const newProducts = productHelper.create({
        name: name,
        price: price,
        category: category,
        description: description,
      });

      res.status(201).json({
        success: true,
        message: 'added successfully!',
        data: newProducts,
      });
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({
        success: false,
        mrssage: error.message,
      });
    }
  }

  edit(req, res) {
    try {
      const { name, category, description } = req.body;
      const price = parseFloat(req.body.price);
      const id = req.params.id;

      if (!name || !price || !category) {
        res.status(400).json({
          success: false,
          message: 'Name, price and category are required.',
        });
      }

      if (isNaN(price) || price < 0) {
        throw new Error('faild the price');
      }

      const product = productHelper.update(id, {
        name: name,
        price: price,
        category: category,
        description: description,
      });

      return res.status(200).json({
        success: true,
        message: 'modified successfuly',
        data: product,
      });
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  view(req, res) {
    try {
      res.json({
        success: true,
        data: productHelper.getAll(),
      });
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  getProduct(req, res) {
    try {
      const product = productHelper.getProduct(req.params.id);
      res.status(200).json({
        success: true,
        data: product,
      });
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  delete(req, res) {
    try {
      const id = req.params.id;
      const newProducts = productHelper.delete(id);
      res.status(200).json({
        success: true,
        message: 'deleted successffully',
        data: newProducts,
      });
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  exportToJson(req, res) {
    try {
      const data = productHelper.getAll();
      const filePath = './products.json';
      fs.writeFileSync(filePath, JSON.stringify(data), 'utf8');
      res.status(200).json({
        success: true,
        message: 'Exported successfully',
        file: '/products.json',
      });
    } catch (error) {
      console.error('Error processing request:', error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

module.exports = new ProductController();
