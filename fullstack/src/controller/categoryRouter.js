let express = require("express");
// handling route ./ /
let categoryRouter = express.Router();

const Router = () => {
    categoryRouter.route("/")
        .get((req, res) => {
            res.send(`This Is category Pages Router. `)
            // res.end()
        })

    categoryRouter.route("/details")
        .get((req, res) => {
            res.send(`This Is category details Pages Router. `)
            // res.end()
        })

    return categoryRouter
}
module.exports = Router
