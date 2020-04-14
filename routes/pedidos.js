const express = require('express');
const pool = require('../bd.js');

const router = express.Router();

// RUTA QUE LISTA LOS PEDIDOS
router.get('/listar', async(req, res) => {
    // sql indica la consulta
    const sql = "SELECT p.id_pedido, p.id_usuario, pr.nombre_producto, pr.url_img, p.cantidad, p.valor_unitario, p.valor_total FROM usuarios u, pedidos p,productos pr WHERE p.id_producto = pr.id_producto and p.id_usuario=u.id_usuario";
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

// RUTA QUE CREA PRODUCTOS
router.put('/editar', async(req, res) => {
    // RECIBE LOS DATOS
    const datos = {
            "id_usuario": req.body.id_usuario,
            "nombre_producto": req.body.nombre_producto,
            "imagen": req.body.url_img,
            "cantidad": req.body.cantidad,
            "valor_unitario": req.body.valor_unitario,
            "valor_total": req.body.valor_total,
            "id_pedido": req.body.id_pedido
        }
        //los datos tienen que ir en el orden de los  ? para que concuerden con los campos donde se guardara
    const sql = "UPDATE pedidos SET id_usuario = ?, nombre_producto = ?, url_img = ? valor_unitario = ? , valor_total = ?  WHERE id_producto = ?";
    await pool.query(sql, [datos],
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
router.put('/editarusuario_pe', async(req, res) => {
    // RECIBE LOS DATOS
    const datos = {
            "id_usuario": req.body.id_usuario,

        }
        //los datos tienen que ir en el orden de los  ? para que concuerden con los campos donde se guardara
    const sql = "UPDATE pedidos SET id_usuario = ? WHERE id_producto = ?";
    await pool.query(sql, [datos],
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
router.put('/editar', async(req, res) => {
    // RECIBE LOS DATOS
    const datos = {
            "id_usuario": req.body.id_usuario,
            "nombre_producto": req.body.nombre_producto,
            "imagen": req.body.url_img,
            "cantidad": req.body.cantidad,
            "valor_unitario": req.body.valor_unitario,
            "valor_total": req.body.valor_total,
            "id_pedido": req.body.id_pedido
        }
        //los datos tienen que ir en el orden de los  ? para que concuerden con los campos donde se guardara
    const sql = "UPDATE pedidos SET id_usuario = ?, nombre_producto = ?, url_img = ? valor_unitario = ? , valor_total = ?  WHERE id_producto = ?";
    await pool.query(sql, [datos],
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

router.put('/editarvalor_pe', async(req, res) => {
    // RECIBE LOS DATOS
    const datos = {

            "valor_total": req.body.valor_total,
            "id_pedido": req.body.id_pedido
        }
        //los datos tienen que ir en el orden de los  ? para que concuerden con los campos donde se guardara
    const sql = "UPDATE pedidos SET valor_total = ?  WHERE id_producto = ?";
    await pool.query(sql, [datos],
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

router.put('/editarproducto_pe', async(req, res) => {
    // RECIBE LOS DATOS
    const datos = {

            "nombre_producto": req.body.nombre_producto,

            "id_pedido": req.body.id_pedido
        }
        //los datos tienen que ir en el orden de los  ? para que concuerden con los campos donde se guardara
    const sql = "UPDATE pedidos SET nombre_producto = ? WHERE id_producto = ?";
    await pool.query(sql, [datos],
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

router.put('/editar', async(req, res) => {
    // RECIBE LOS DATOS
    const datos = {

            "cantidad": req.body.cantidad,

            "id_pedido": req.body.id_pedido
        }
        //los datos tienen que ir en el orden de los  ? para que concuerden con los campos donde se guardara
    const sql = "UPDATE pedidos SET cantidad = ? WHERE id_producto = ?";
    await pool.query(sql, [datos],
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

// RUTA QUE LISTA LOS PRODUCTOS
router.delete('/eliminar/:id', async(req, res) => {
    // sql indica la consulta
    const sql = "DELETE FROM pedidos WHERE id_pedido = ?";
    await pool.query(sql, req.params.id,
        (error, result) => {
            //recibe los errores
            if (error) {
                console.log(error)
                res.sendStatus(404);

            } else {
                // recibe los resultados de la consulta
                res.sendStatus(200);
            }
        })
});



module.exports = router;
