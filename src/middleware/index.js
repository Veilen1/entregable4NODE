const middleware1 = (req, res, next) =>{
    console.log(req.body);
    next()
};

module.exports = { middleware1 }