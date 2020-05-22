const express = require('express');
const pool = require('../bd.js');

const router = express.Router();

// RUTA QUE LISTA LOS USUARIOS
router.get('/listar', async(req, res) => {
    // sql indica la consulta
    const sql = "SELECT * FROM usuario";
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



router.get('/amigos', async(req, res) => {
    // sql indica la consulta
    const sql = "SELECT a.* FROM amigos a, estado e WHERE a.id_estado = e.id_estado AND a.id_estado=1";
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

router.get('/perfil', async(req, res) => {
    // sql indica la consulta
    const sql = "SELECT * FROM usuario";
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
    const { Nombre, User, pass } = req.body;
    const newusuario = { Nombre, User, pass };
    await pool.query('insert into usuario set ?', [newusuario]);
    console.log(req.body);
    res.send('tamos listones');
});

router.post('/contacto', async(req, res) => {
    const { contacto, id_chat } = req.body;
    const newusuario = { contacto, id_chat };
    await pool.query('insert into contacto set ?', [newusuario]);
    console.log(req.body);
    res.send('tamos listones');
});

router.post('/mensaje', async(req, res) => {
    const { contacto, mensajes } = req.body;
    const newusuario = { contacto, mensajes };
    await pool.query('insert into contacto set ?', [newusuario]);
    console.log(req.body);
    res.send('tamos listones');
});

router.get('/chat', async(req, res) => {
    // sql indica la consulta
    const sql = "SELECT c.* FROM contacto c, chat ch WHERE c.id_chat = ch.id AND ch.id= '1'";
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

router.put("/modificar/:id", async(req, res) => {
    const { id } = req.params;
    const { Nombre, User, pass } = req.body;
    const modificausua = { Nombre, User, pass };
    await pool.query('UPDATE usuario SET ? WHERE id_usuario = ? ', [modificausua, id]);
    console.log(req.body);
    res.send('modificado');
});

router.put("/modificar/nombre/:id", async(req, res) => {
    const { id } = req.params;
    const { Nombre } = req.body;
    const modificausua = { Nombre };
    await pool.query('UPDATE usuario SET Nombre=? WHERE id_usuario = ? ', [modificausua, id]);
    console.log(req.body);
    res.send('tamos listones');
});

router.put("/modificar/user/:id", async(req, res) => {
    const { id } = req.params;
    const { User } = req.body;
    const modificausua = { User };
    await pool.query('UPDATE usuario SET User=? WHERE id_usuario = ? ', [modificausua, id]);
    console.log(req.body);
    res.send('tamos listones');
});

router.put("/modificar/pass/:id", async(req, res) => {
    const { id } = req.params;
    const { pass } = req.body;
    const modificausua = { pass };
    await pool.query('UPDATE usuario SET pass=? WHERE id_prodicto = ? ', [modificausua, id]);
    console.log(req.body);
    res.send('tamos listones');
});


router.delete("/eliminar/:id", async(req, res) => {

    const sql = "DELETE FROM usuario WHERE id_usuario = '?'";
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