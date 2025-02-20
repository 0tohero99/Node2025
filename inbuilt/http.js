let http = require("http");


let server = http.createServer((req, res) => {
    res.write(`<h1>This is Node server. </h1>`)
    res.end()
})
// server.listen(7000)

//here also we can do error handlings if want. ex.if can be server not starts.// server.listen(7000)
server.listen(7000, (error) => {
    if (error) throw error
    console.log("server runnig on a port no 7000 ")
})

