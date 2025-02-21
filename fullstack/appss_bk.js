// let express = require('express');
//  // express is a framework of node.js .
//  // it is used to make http server.
//  // it is used to make crud operations.
//  // it is used to make rest api.


// //to access the method(crud) we have to make obzects .
// let app = express();
// let port = 7001;

// // defining route.

// // app.get("/") means:
// // When a user opens http://localhost:7001/, this code will run.

// // The server "reads" the data because it is a GET request.
// // res.send() sends the data (HTML text) back so that the user can see the result.

// app.get("/", (req, res) => {
//     res.send("<h1>This is Home Pages</h1>")
//     res.end()
// });

// app.listen(port, (error) => {
//     if (error) throw error;
//     console.log(` Server is running on port ${port} `)
// })

// above is the explanation of below lines.
let fs = require('fs');
let express = require('express');
let app = express();
let port = 7001;

app.get("/", (req, res) => {
    res.send("<h1> Hello from express .</h1>")
    res.end()
})

app.get("/location", (req, res) => {
    res.send((`<h1> This is location page .</h1>`))
    res.end()
})

app.get("/data", (req, res) => {
    fs.readFile("city.json", "utf-8", (error, data) => {
        if (error) throw error;
        // res.send(data); //or below line to see the data preetyformat.// 
        res.json(JSON.parse(data));
        res.end()
    })
})


app.get("/products", (req, res) => {
    res.send((`<h1> This is products page .</h1>`))
    res.end()
})

 
app.get("/category", (req, res) => {
    res.send((`<h1> This is category page .</h1>`))
    res.end()
})
 

app.listen(port, (error) => {
    if (error) throw error;
    console.log(`server is running on port ${port}`)
})



