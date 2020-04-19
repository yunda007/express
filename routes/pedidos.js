const express = require('express');
const pool = require('../bd.js');

const router = express.Router();


router.get('/listar', async(req, res) => {
    // sql indica la consulta
    const sql = "SELECT p.Nombre,u.Nombre,pe.Valor,pe.Cantidad FROM pedido pe, producto p, usuario u WHERE pe.id_producto = p.id_producto AND u.id_usuario = pe.id_usuario ";
    await pool.query(sql,
        (error, result) => {
            //recibe los errores
            if (error) {
                console.log(error)
            } else {
                // recibe los resultados de la consulta
                res.json(result);
            }
        })
});

router.post('/insertar', async(req, res) => {
    const { id_producto, id_usuario, Valor, Cantidad } = req.body;
    const newpedido = { id_producto, id_usuario, Valor, Cantidad };
    await pool.query('insert into pedido set ?', [newpedido]);
    console.log(req.body);
    res.send('agregado');
});

router.put("/modificar/:id", async(req, res) => {
    const { id } = req.params;
    const { id_producto, id_usuario, Valor, Cantidad } = req.body;
    const modificaPedido = { id_producto, id_usuario, Valor, Cantidad };
    await pool.query('UPDATE pedido SET ? WHERE id_pedido = ? ', [modificaPedido, id]);
    console.log(req.body);
    res.send('tamos listones');
});

// RUTA QUE CREA PEDIDOSj
router.post('/crear', async(req, res) => {
    // RECIBE LOS DATOS
    const datos = {
        "id_usuario": req.body.id_usuario,
        "nombre_producto": req.body.nombre_producto,
        "imagen": req.body.url_img,
        "cantidad": req.body.cantidad,
        "valor_unitario": req.body.valor_unitario,
        "valor_total": req.body.valor_total
    }
    const sql = "INSERT INTO pedidos SET ?";
    await pool.query(sql, datos,
        (error, result) => {
            //recibe los errores
            if (error) {
                console.log(error)
            } else {
                // recibe los resultados de la consulta
                res.sendStatus(200);
            }
        })
});

router.put("/modificar/producto/:id", async(req, res) => {
    const { id } = req.params;
    const { id_producto } = req.body;
    const modificaPedido = { id_producto };
    await pool.query('UPDATE pedido SET id_producto=? WHERE id_pedido = ? ', [modificaPedido, id]);
    console.log(req.body);
    res.send('tamos listones');
});

router.put("/modificar/valor/:id", async(req, res) => {
    const { id } = req.params;
    const { Valor } = req.body;
    const modificaPedido = { Valor };
    await pool.query('UPDATE pedido SET Valor=? WHERE id_pedido = ? ', [modificaPedido, id]);
    console.log(req.body);
    res.send('tamos listones');
});

router.put("/modificar/cantidad/:id", async(req, res) => {
    const { id } = req.params;
    const { Cantidad } = req.body;
    const modificaPedido = { Cantidad };
    await pool.query('UPDATE pedido SET Cantidad=? WHERE id_pedido = ? ', [modificaPedido, id]);
    console.log(req.body);
    res.send('tamos listones');
});

router.put("/modificar/usuario/:id", async(req, res) => {
    const { id } = req.params;
    const { id_producto } = req.body;
    const modificaPedido = { id_producto };
    await pool.query('UPDATE pedido SET id_usuario=? WHERE id_pedido = ? ', [modificaPedido, id]);
    console.log(req.body);
    res.send('tamos listones');
});

router.get('/masvendido', async(req, res) => {
    // sql indica la consulta
    const sql = "SELECT p.Nombre as producto,u.Nombre as usuario,pe.Valor as valor,pe.Cantidad as cantidad FROM pedido pe, producto p, usuario u WHERE pe.id_producto = p.id_producto AND u.id_usuario = pe.id_usuario ORDER BY Cantidad DESC";
    await pool.query(sql,
        (error, result) => {
            //recibe los errores
            if (error) {
                console.log(error)
            } else {
                // recibe los resultados de la consulta
                res.json(result);
            }
        })
});

router.get('/comprados', async(req, res) => {
    // sql indica la consulta
    const sql = "SELECT p.Nombre,u.Nombre,pe.Valor,pe.Cantidad FROM pedido pe, producto p, usuario u WHERE u.id_usuario = pe.id_usuario AND pe.id_producto = p.id_producto AND pe.id_estado=1";
    await pool.query(sql,
        (error, result) => {
            //recibe los errores
            if (error) {
                console.log(error)
            } else {
                // recibe los resultados de la consulta
                res.json(result);
            }
        })
});


router.get('/cancelado', async(req, res) => {
    // sql indica la consulta
    const sql = "SELECT p.Nombre,u.Nombre,pe.Valor,pe.Cantidad FROM pedido pe, producto p, usuario u WHERE u.id_usuario = pe.id_usuario AND pe.id_producto = p.id_producto AND pe.id_estado=2";
    await pool.query(sql,
        (error, result) => {
            //recibe los errores
            if (error) {
                console.log(error)
            } else {
                // recibe los resultados de la consulta
                res.json(result);
            }
        })
});




router.delete("/eliminar/:id", async(req, res) => {

    const sql = "DELETE FROM pedido WHERE id_pedido = '?'";
    await pool.query(sql,
        (error, result) => {
            //recibe los errores
            if (error) {
                console.log(error)
            } else {
                // recibe los resultados de la consulta
                res.json(result);
            }
        })

});
module.exports = router;