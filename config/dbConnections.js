const mysql = require('mysql')

const connMySql = () => {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456789',
        database: 'portal_noticias'
    })
}

module.exports = () => {
    return connMySql
}