const { Router } = require("express")
const routerProducts = Router()
const { middleware1 } = require("../middleware")

routerProducts.get("/", (req, res) => {
    res.send("Get Products")
})

routerProducts.post("", middleware1, (req, res) => {
    res.send("Nashee")
})


module.exports = routerProducts;