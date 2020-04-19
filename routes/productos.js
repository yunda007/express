const express = require('express');
const pool = require('../bd.js');

const router = express.Router();


router.get('/listar', async(req, res) => {
    // sql indica la consulta
    const sql = "SELECT * FROM producto";
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

router.get("/idpro", async(req, res) => {
    const { id_producto } = req.params;
    const sql = "SELECT id_producto FROM producto";
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

router.get("/codigo", async(req, res) => {
    const datos = {
        "Codigo": req.body.Codigo
    }
    const sql = "SELECT Codigo FROM producto";
    await pool.query(sql, [datos],
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

router.get("/nombre", async(req, res) => {

    const sql = "SELECT Nombre FROM producto";
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

router.get("/valor", async(req, res) => {
    const sql = "SELECT Valor FROM producto";
    await pool.query(sql, [datos],
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
    const { Nombre, Valor, Codigo } = req.body;
    const newProducto = { Nombre, Valor, Codigo };
    await pool.query('insert into producto set ?', [newProducto]);
    console.log(req.body);
    res.send('funciono');
});

router.put("/modificar/:id", async(req, res) => {
    const { id } = req.params;
    const { Nombre, Valor, Codigo, Imagen } = req.body;
    const modificaPor = { Nombre, Valor, Codigo, Imagen };
    await pool.query('UPDATE producto SET ? WHERE id_producto = ? ', [modificaPor, id]);
    console.log(req.body);
    res.send('modificado');
});

router.put("/modificar/Nombre/:id", async(req, res) => {
    const { id } = req.params;
    const { Nombre } = req.body;
    const modificaPor = { Nombre };
    await pool.query('UPDATE producto SET Nombre=? WHERE id_producto = ? ', [modificaPor, id]);
    console.log(req.body);
    res.send('modificado');
});

router.put("/modificar/codigo/:id", async(req, res) => {
    const { id } = req.params;
    const { Codigo } = req.body;
    const modificaPor = { Codigo };
    await pool.query('UPDATE producto SET Codigo=? WHERE id_producto = ? ', [modificaPor, id]);
    console.log(req.body);
    res.send('modificado');
});

router.put("/modificar/valor/:id", async(req, res) => {
    const { id } = req.params;
    const { Valor } = req.body;
    const modificaPor = { Valor };
    await pool.query('UPDATE producto SET Valor=? WHERE id_producto = ? ', [modificaPor, id]);
    console.log(req.body);
    res.send('modificado');
});

router.put("/modificar/imagen/:id", async(req, res) => {
    const { id } = req.params;
    const { Imagen } = req.body;
    const modificaPor = { Imagen };
    await pool.query('UPDATE producto SET Imagen=? WHERE id_producto = ? ', [modificaPor, id]);
    console.log(req.body);
    res.send('modificado');
});

router.delete("/eliminar/:id", async(req, res) => {

    const sql = "DELETE FROM producto WHERE id_producto = '?'";
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