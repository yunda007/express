const express = require('express');
const pool = require('../bd.js');

const router = express.Router();

// RUTA QUE LISTA LOS PRODUCTOS
router.get('/listar', async(req, res) => {
    // sql indica la consulta
    const sql = "SELECT * FROM productos";
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
router.get('/codigo_pro', async(req, res) => {
    // sql indica la consulta
    const sql = "SELECT codigo_producto FROM productos ";
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
router.get('/nombre_pro', async(req, res) => {
    // sql indica la consulta
    const sql = "SELECT nombre_producto FROM productos ";
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

router.get('/valor_pro', async(req, res) => {
    // sql indica la consulta
    const sql = "SELECT valor_producto FROM productos ";
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

// RUTA QUE CREA PRODUCTOS
router.post('/crear', async(req, res) => {
    // RECIBE LOS DATOS
    const datos = {
        "nombre_producto": req.body.nombre_producto,
        "valor_producto": req.body.valor_producto,
        "codigo_producto": req.body.codigo_producto,
        "url_img": req.body.url_img
    }
    const sql = "INSERT INTO productos SET ?";
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
            "nombre_producto": req.body.nombre_producto,
            "valor_producto": req.body.valor_producto,
            "codigo_producto": req.body.codigo_producto,
            "url_img": req.body.url_img,
            "id_producto": req.body.id_producto

        }
        //los datos tienen que ir en el orden de los  ? para que concuerden con los campos donde se guardara
    const sql = "UPDATE productos SET nombre_producto = ?, valor_producto = ? , codigo_producto ?, url_img = ?  WHERE id_producto = ?";
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

router.put('/editarnombre_pro', async(req, res) => {
    // RECIBE LOS DATOS
    const datos = {
            "nombre_producto": req.body.nombre_producto,
        }
        //los datos tienen que ir en el orden de los  ? para que concuerden con los campos donde se guardara
    const sql = "UPDATE productos SET nombre_producto = ? WHERE id_producto = ?";
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

router.put('/editarcodigo_pro', async(req, res) => {
    // RECIBE LOS DATOS
    const datos = {
            "id_producto": req.body.id_producto,
            "codigo_producto": req.body.codigo_producto,


        }
        //los datos tienen que ir en el orden de los  ? para que concuerden con los campos donde se guardara
    const sql = "UPDATE productos SET  codigo_producto ?  WHERE id_producto = ?";
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
router.put('/editarvalor_pro', async(req, res) => {
    // RECIBE LOS DATOS
    const datos = {

            "valor_producto": req.body.valor_producto,
            "id_producto": req.body.id_producto

        }
        //los datos tienen que ir en el orden de los  ? para que concuerden con los campos donde se guardara
    const sql = "UPDATE productos SET valor_producto = ? WHERE id_producto = ?";
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
router.put('/editarimagen_pro', async(req, res) => {
    // RECIBE LOS DATOS
    const datos = {

            "url_img": req.body.url_img,
            "id_producto": req.body.id_producto

        }
        //los datos tienen que ir en el orden de los  ? para que concuerden con los campos donde se guardara
    const sql = "UPDATE productos SET url_img = ? WHERE id_producto = ?";
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
    const sql = "DELETE FROM productos WHERE id_producto = ?";
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