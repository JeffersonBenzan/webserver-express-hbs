const http = require('http');

http.createServer((rep, res) => {


    res.write("Hola mundo ");
    res.end();


}).listen(3000);

console.log('------------------------------------');
console.log("Escuchando en el puerto 3000");
console.log('------------------------------------');