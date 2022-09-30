const { Router } = require("express")
const routerProducts = Router()
const { middleware1 } = require("../middleware/middleware")
const ApiProd = require('../controllers/products');

let products = []

// Instanciando clase
let api = new ApiProd(products)

//Routeando llamadas
routerProducts.get("/", (req, res) => {
    api.getProducts(req,res)
})

routerProducts.get("/:id", (req, res) =>{
    api.getProductById(req,res)
})

routerProducts.post("/", (req, res) => {
    api.addProduct(req, res)
})

routerProducts.put("/:id", (req, res) => {
    api.changeProduct(req,res)
})

routerProducts.delete("/:id", (req, res) => {
    api.deleteProduct(req, res)
})

module.exports = routerProducts;