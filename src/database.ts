import mysql from 'promise-mysql';

import DBvalues from "./DBvalues";

const pool = mysql.createPool(DBvalues.database);

pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('Conectado a la base de datos');
    });

export default pool;