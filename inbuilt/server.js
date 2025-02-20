// The HTTP module in Node.js allows developers to create an Http server and handle client request and server responses .
// It provides methods and properties to work with HTTP requests and responses , enabling the creation of REST APIs, web pages and other networked app.
// A web server is software or hardware that serves the web content (HTML, CSS ,JavaScript ,etc.) to clients (usually browsers) over the internet or an intranet.
// it uses protocols like HTTP/HTTPS to handle requests and responses.
const http=require('http');
// web server
const server=http.createServer((req,res)=>{
   if(req.url==='/'){
    res.write("Hello Welcome");
    res.end();
   }
   if(req.url==='/aboutUs'){
    res.write("We are From team way2upskill");
    res.end();z
   }
   if(req.url==='/login'){
    res.write("pls enter your  first name");
    res.end();
   }
    
});
const PORT=7000;
server.listen(PORT,()=>{
    console.log(`Listening to Port ${PORT}`);
})
