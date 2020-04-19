const express = require('express');
const app = express();

//rutas importadas
const productosRoutes = require('./routes/productos');
const pedidosRoutes = require('./routes/pedidos');
const usuariosRoutes = require('./routes/usuarios');
const port = 1000;

// 
app.use(express.json());


//rutas no mueva caremonda
app.use('/productos', productosRoutes);
app.use('/pedidos', pedidosRoutes);
app.use('/usuarios', usuariosRoutes);



app.listen(port, () => {
    console.log('SERVER WORKING ON PORT', port);
})