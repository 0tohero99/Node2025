// let fs = require('fs');


//File methods 👇:
//fs.writeFile() :it replaces old content to new content when run.
//fs.appendFile() :it keeps ading new content when run .
//fs.readFile() : for reading the file .
//fs.unlink() :for deleting the file.
//fs.rename() : for renameing the file.


//creating file and write something into it : //
//callback: passing a function as parameter within another function.//


// fs.writeFile //


// onefunction    filename          data        otherfunction
// fs.writeFile("mycode.txt", "Learning Node Now ", (err) => {
//     if (err) throw err
//     console.log("file created");
// })

// fs.writeFile("mycode.txt", "\n This is new line .", (err) => {
//     if (err) throw err
//     console.log("file created");
// }) // old content got deleted with new content.


// fs.appendFile //


// fs.appendFile("new_code.txt", "Learning Nodes from edureka.\n", (err) => {
//     if (err) throw err
//     console.log("file append sucess.")
// })
// fs.appendFile("new_code.txt", "This is new line", (err) => {
//     if (err) throw err
//     console.log("file append sucess.")
// })//old content not got deleted with new content.


// fs.readFile//
// it will get the file data but that data will be encoded that is not readeble .


// fs.readFile("new_code.txt", (error, data) => {
//     if (error) throw error;
//     console.log(data)
// })

// //for getting the decoded data try "utf-8".

// fs.readFile("new_code.txt", "utf-8", (error, data) => {
//         if (error) throw error;
//         console.log(data)
// })



// fs.unlink //
// there is no file with the name newtext but it will se the console text file deleted

// fs.unlink("newtext", () => {
//     console.log("file deleted")
// })

//  Note :  so try error handling to get the error if file is not there . 

// fs.unlink("new.txt", (err) => {
//     if (err) throw err
//     console.log("file deleted")
// })// now it says no such file or directory //

// deleteing the file://
// fs.unlink("file.txt", (err) => {
//     if (err) throw err
//     console.log("file deleted")
// })

// fs.rename //

// fs.rename("mycode.txt", "newfile.txt", (err) => {
//     if (err) throw err
//     console.log("file renamed success.")
// })