const express = require('express');
const app = express()
const routerProducts = require('./src/routes/products');

//  Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api/products", routerProducts)
app.use(express.static("./src/public"))


// Server Running
const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log("server running");
})
server.on("error", error => console.log(error))