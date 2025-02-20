let fs = require("fs");
let http = require("http");


let server = http.createServer((req, res) => {
    //reading file .
    fs.readFile("city.json", "utf-8", (error, data) => {
        if (error) throw error;
        //  returning  data .
        res.write(data);
        res.end()
    })
})
server.listen(7000, (error) => {
    if (error) throw error;
    console.log("Server is running on port 7000");
})