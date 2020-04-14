const mysql = require('mysql');
const key = require('./keys');

const pool = mysql.createPool(key.database);

pool.getConnection((error, connection) => {
	if (error) {
		console.log(error);
	} else {
		pool.releaseConnection(connection);
		console.log("DB IS CONNECTED")
	}
});

module.exports = pool;