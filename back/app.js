const express = require('express');
const routerProductos = require('./src/routes/index');
const server = express()
const dotenv = require('dotenv');
dotenv.config()

const PORT = process.env.PORT || 3000

server.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
    next()
})

server.get('/', (req, res)=>{
    res.send('Api tienda')
});

server.use('/api', routerProductos)

server.listen(PORT, ()=>{
    console.log(`servidor corriendo en: http://localhost:${PORT}/`);
}) 