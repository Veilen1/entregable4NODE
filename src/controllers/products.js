
/* const listaProd = new Contenedor("../productos.txt") */

const products = []

const getAll = (req, res) => {
    res.json(products)
}

const getById = (req, res) => {
    const {id} = req.params
    console.log(id);
    if(id){
        res.send(products.find(product => product.id === id))
    }else{
        res.send(`producto con id: ${id} no encontrado`)
    }
    /* res.send(products.find(product => product.id === id)) */
}

const postProduct = (req, res) => {
    let product = req.body
    product.id = products.length + 1
    products.push(product)
    res.json(product)
}

module.exports = { getAll, postProduct, getById }