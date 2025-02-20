let fs = require('fs');
let express = require('express');
let app = express();
let port = 7001;

app.get("/", (req, res) => {
    res.send("<h1> Hello from express .</h1>")
    res.end()
})

app.get("/products", (req, res) => {
    res.send((`<h1>This is products page .</h1>`))
    res.end()
})

app.get("/details", (req, res) => {
    res.send((`<h1>Details of products page .</h1>`))
    res.end()
})

app.get("/category", (req, res) => {
    res.send((`<h1>This is category page .</h1>`))
    res.end()
})
app.get("/details", (req, res) => {
    res.send((`<h1>Details of category page .</h1>`))
    res.end()
})

app.listen(port, (error) => {
    if (error) throw error;
    console.log(`server is running on port ${port}`)
})



