const express = require('express');
const pool = require('../bd.js');

const router = express.Router();

// RUTA QUE LISTA LOS USUARIOS
router.get('/listar', async(req, res) => {
    // sql indica la consulta
    const sql = "SELECT * FROM usuarios";
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
        "nombre": req.body.nombre,
        "usuario": req.body.usuario,
        "contraseña": req.body.pass

    }
    const sql = "INSERT INTO usuarios SET ?";
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
            "nombre": req.body.nombre_producto,
            "usuario": req.body.usuario,
            "cotraseña": req.body.pass,
            "id_usuario": req.body.id_usuario

        }
        //los datos tienen que ir en el orden de los  ? para que concuerden con los campos donde se guardara
    const sql = "UPDATE usuarios SET nombre = ?, usuario = ? , pass = ? WHERE id_usuario = ?";
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
router.put('/editarnombre_user', async(req, res) => {
    // RECIBE LOS DATOS
    const datos = {
            "nombre": req.body.nombre_producto,
            "id_usuario": req.body.id_usuario

        }
        //los datos tienen que ir en el orden de los  ? para que concuerden con los campos donde se guardara
    const sql = "UPDATE usuarios SET nombre = ? WHERE id_usuario = ?";
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

router.put('/editarusuario', async(req, res) => {
    // RECIBE LOS DATOS
    const datos = {

            "usuario": req.body.usuario,

            "id_usuario": req.body.id_usuario

        }
        //los datos tienen que ir en el orden de los  ? para que concuerden con los campos donde se guardara
    const sql = "UPDATE usuarios SET  usuario = ?  WHERE id_usuario = ?";
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
router.put('/editarpass', async(req, res) => {
    // RECIBE LOS DATOS
    const datos = {

            "cotraseña": req.body.pass,
            "id_usuario": req.body.id_usuario

        }
        //los datos tienen que ir en el orden de los  ? para que concuerden con los campos donde se guardara
    const sql = "UPDATE usuarios SET pass = ? WHERE id_usuario = ?";
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
    const sql = "DELETE FROM usuarios WHERE id_usuario = ?";
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