const express = require('express')
const router = express.Router()

const { getAllProducts } = require('../controllers/products.controller')



// get all products
router.get('/', getAllProducts);

exports.routes = router