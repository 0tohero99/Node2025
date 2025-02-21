
let express = require("express");
// handling route ./ /
let productsRouter = express.Router();

const Router = () => {
    productsRouter.route("/")
        .get((req, res) => {
            res.send(`This Is products Pages Router. `)
            res.end()
        })

    productsRouter.route("/details")
        .get((req, res) => {
            res.send(`This Is products details Pages Router. `)
            res.end()
        })
    return productsRouter
}
 module.exports = Router 
