// const http = require("http");
const express = require("express");
// const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "node_study")));

app.get("/", (req, res) => {
    const filePath = path.join(__dirname, "node_study", "index.html");
    res.sendFile(filePath);
});

app.get("/:file", (req, res) => {
    const filePath = path.join(__dirname, "node_study", req.params.file);
    res.sendFile(filePath);
});

function sendFile(res, filePath){
    fs.readFile(filePath, (err, data) => {
        if(!err){
            let contentType = "text/html";
            if(filePath.endsWith(".css")){
                contentType = "text/css";
            }
            res.writeHead(200, {"content-Type": contentType});
            res.end(data);
            console.log(`Sent content to the client: ${filePath}`);
        }else{
            res.writeHead(404, { "Content-Type": "text/html"});
            res.end("<h1>File not found</h1>");
        }
    });
}

// const  server = http.createServer((request, response) => {
//     let filePath = path.join(__dirname, "研修", request.url === "/" ? "index.html" : request.url);

//     fs.readFile(filePath, (err, data) => {
//         if(!err){
//             let contentType = "text/html";
//             if(filePath.endsWith(".css")){
//                 contentType = "text/css";
//             }
//             response.writeHead(200, { "Content-Type": contentType});
//             response.end(data);
//             console.log(`Sent content to the client: ${request.url}`);
//         }else{
//             response.writeHead(404, { "Content-Type": "text/html"});
//             response.end("<h1>File not found</h1>");
//         }
//     });
// });

// server.listen(port);
// console.log(`The server has started and is listening on port number: ${port}`);

app.listen(port, () => {
    console.log(`The server has started and is listening on port number: ${port}`);
})
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const port = 3000;

// const  server = http.createServer((request, response) => {
//     // let filePath = path.join(__dirname, "研修", request.url === "/" ? "index.html" : request.url);
//   let filePath = path.join(__dirname, request.url === "/" ? "index.html" : request.url);
  
//     fs.readFile(filePath, (err, data) => {
//         if(!err){
//             let contentType = "text/html";
//             if(filePath.endsWith(".css")){
//                 contentType = "text/css";
//             }
//             response.writeHead(200, { "Content-Type": contentType});
//             response.end(data);
//             console.log(`Sent content to the client: ${request.url}`);
//         }else{
//             response.writeHead(404, { "Content-Type": "text/html"});
//             response.end("<h1>File not found</h1>");
//         }
//     });
// });

// server.listen(port);
// console.log(`The server has started and is listening on port number: ${port}`);