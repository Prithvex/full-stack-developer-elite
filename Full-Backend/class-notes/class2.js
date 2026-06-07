// Node.js Basics:
// Introduction to Node.js.
// Installing Node.js and npm.
// Working with modules.
// File system operations.
// understanding HTTP module


// Node is the --> Js runtime environment 
// js se backend nahi ban sakta , js dont have the backend functionality 
//ryan dahl --> hum js ka code likhege jo ki wrapper layer of js receive karegi and wo code v8
// engine ke c++ modules ke saath ek server create krega
// [js Wrapper (V8)] --> node js  

//created a node --> npm init (it creates an packages )--> and link it to the main script 

//How to use the module or package  
//--> documentation se copy kar lo (use callback and sync API)

const fs = require('fs');
//callback ka matlab function hota hain 
fs.writeFile("filename", "Data yaha likho ", function(err){
    //condition yaha pe aayegi 
} )

//Example --
fs.writeFile("hey.txt", "Data yaha likho ", function(err){
    if (err) console.log("Error hain");
    else console.log("All Good");
} )

//Must --> Run the file with node --> node class2.js

//Append into the existing file
fs.appendFile("hey.txt", "Data yaha likho ", function(err){
    if (err) console.log("Error hain");
    else console.log("All Good");
} )

//rename --> file ko rename kar dega 
fs.rename("hey.txt", "hello.txt", function(err){
    if (err) console.log("Error hain");
    else console.log("All Good");
} )

//copyfile (file and then the destination path)
fs.copyFile("hey.txt", "./copy.copy.txt",function(err){
    if (err) console.log("Error hain");
    else console.log("All Good");
} )
//TO get the error message --> err.message

//unlink --> file ko delete karna (path , callback )
fs.unlink("./copy.copy.txt",function(err){
    if (err) console.log("Error hain");
    else console.log("All Good");
} )

//rmdir --> empty folder ko delete karna (path , callback )
//to rid of the foder with files use -->  rmdir  or rm
fs.rmdir("./copy.copy.txt",{recursive : true},function(err){
    if (err) console.log("Error hain");
    else console.log("All Good");
} )


//HTTP and HTTPS 

//Protocal--> is the set of  rules aur ye rules follow ho esi liye ye OS me preinstall aate hain 
// the tranfer and receive of everything is done by http protocall

const http = require('http');

const server = http.createServer(function(req, res){
    res.end("Hello World")
})

server.listen(3000);