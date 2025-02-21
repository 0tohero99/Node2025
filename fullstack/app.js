
let express = require("express");

// to access the methods(crud) creating obzect .//
let app = express();
let port = 7000

// handling route ./ /
let categoryRouter = require("./src/controller/categoryRouter")();
let productsRouter = require("./src/controller/productsRouter")();

app.use("/category", categoryRouter,)
app.use("/products", productsRouter,)


app.get("/", (req, res) => {
    res.send(`<h1> Hello This Is Home Pages .</h1>`)
    res.end()
})

app.listen(port, (Error) => {
    if (Error) throw Error;
    console.log(`Server running on port no ${port}`)
})
