const express = require('express');
const path = require('path');// comes with node, lets us navigate the file system/folders
// const http = require('http');
// const hostname = '127.0.0.1'; // request to got to that location
//heroku assigned port

const port = process.env.PORT || 3000; // a double pipe "||" means "or"

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    console.log('at the home route');
    res.sendFile(path.join(__dirname + '/index.html'));
    //this builds local host:3000/views/index.html
})

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname + '/about.html'));
//     //this builds local host:3000/views/about.html
// })

// app.get('/projects', (req, res) => {
//     res.sendFile(path.join(__dirname + '/projects.html'));
//     //this builds local host:3000/views/projects.html
// })

// app.get('/gallery', (req, res) => {
//     res.sendFile(path.join(__dirname + '/contact.html'));
//     //this builds local host:3000/views/contact.html
// })


app.listen(port, () => {
    console.log(`Server runnin at ${port}`);
});

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\, we out here\n');   //this is the response
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`); //server running here
// });