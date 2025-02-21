let express = require('express');
let fs = require('fs');

let app = express();
let port = 7000;

let categoryRouter = express.Router();
let productRouter = express.Router();

let countryRouter = express.Router();

app.get('/', (req, res) => {
    res.send(`<h1>Hello fom express. </h1>`);
    // res.end();
})
// -------------------------------------------------------//
countryRouter.route("/")
    .get((req, res) => {
        res.send(`<h1>country page route. </h1>`);
        // res.end();
    })
countryRouter.route("/state")
    .get((req, res) => {
        res.send(`<h1>state page route. </h1>`);
        // res.end();
    })
countryRouter.route("/city")
    .get((req, res) => {
        res.send(`<h1>city page route. </h1>`);
        // res.end();
    })

app.use("/country", countryRouter);
// -------------------------------------------------------//

app.get('/', (req, res) => {
    res.send(`<h1>Hello fom express. </h1>`);
    // res.end();
})

categoryRouter.route("/")
    .get((req, res) => {
        res.send(`<h1>Category page route. </h1>`);
        // res.end();
    })

categoryRouter.route("/details")
    .get((req, res) => {
        res.send(`<h1>Category details page route. </h1>`);
        // res.end();
    })


productRouter.route("/")
    .get((req, res) => {
        res.send(`<h1>product pages route. </h1>`);
        // res.end();
    })

productRouter.route("/details")
    .get((req, res) => {
        res.send(`<h1>product details pages route. </h1>`);
        // res.end();
    })
app.use("/category", categoryRouter);
app.use("/products", productRouter);

app.listen(port, (err) => {
    if (err) throw err;
    console.log(`Server is running on port ${port}`);
})