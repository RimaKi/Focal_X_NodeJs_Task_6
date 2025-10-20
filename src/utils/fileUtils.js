let {products , currentId} = require("../models/product");

class ProductHelper {
  create(product) {
    const newProduct = { id: currentId, ...product };
    products.push(newProduct);
    return products;
  }

  update(id, productData) {
    id = parseInt(id);
    let product = products.find((e) => e.id === id);
    product = { id, ...productData };
    return product;
  }

  getAll() {
    return products;
  }

  getProduct(id) {
    id = parseInt(id);
    const product = products.find((e) => e.id === id);
    return product;
  }

  delete(id) {
    id = parseInt(id);
    products = products.filter((e) => e.id !== id);
    return products;
  }
}

module.exports = new ProductHelper();