const express = require('express');
const router = express.Router();
const ProductController = require("../controllers/product.controller");
const validationOfId = require("../middlewares/route.middleware");


router.post("/", ProductController.add);
router.get("/",ProductController.view);

router.get("/:id",validationOfId,ProductController.getProduct)
router.put("/:id",validationOfId,ProductController.edit);
router.delete("/:id",validationOfId,ProductController.delete);

router.get('/export/json', ProductController.exportToJson);

module.exports = router;