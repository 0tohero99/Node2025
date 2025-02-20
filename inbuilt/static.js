const { error } = require("console");
let fs = require("fs");
let http = require("http");

let server = http.createServer((req, res) => {
    // reading json file .//
    fs.readFile("city.json", "utf-8", (error, data) => {
        if (error) throw error
        // returning file .//
        res.write(data);
        res.end()
    })
})
server.listen(7001)