const express = require('express');
const http = require('http');
const path = require('path');


const app  = express();
const port = process.env.PORT || 3002;


app.use(express.static(__dirname + '/dist/memoryGameRE'));


app.get('/*', (req,res) => res.sendFile(path.join(__dirname)));


const server = http.createServer(app);


server.listen(port, () => console.log('express is listening to port:3002'));
