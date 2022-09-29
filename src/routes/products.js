const { Router } = require("express")
const routerProducts = Router()
const { middleware1 } = require("../middleware/middleware")
const { getAll, postProduct, getById} = require('../controllers/products');

routerProducts.get("/", getAll)

routerProducts.get("/:id", getById)

routerProducts.post("/", postProduct)


module.exports = routerProducts;