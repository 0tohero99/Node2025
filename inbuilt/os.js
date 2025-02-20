let os = require('os');
// when aplication is running on a server and it went slow we can check why 👇 :
console.log(os.platform())
//win32 i.e It Tells on which os system aplication is running.
console.log(os.arch())
//x64 
// console.log(os.cpus())
//4 i.e tell how many cpu is there in this laptops.
console.log(os.cpus().length + "core")
// 4 core.
console.log(os.freemem())
// 879362048 byt free.
console.log(os.uptime())
// 13319.14 sec system is up n running.


