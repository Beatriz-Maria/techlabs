var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ell5280p#M',
    database: 'db'
});

connection.connect(function (error) {
    if (!!error) {
        console.log(error);
    } else {
        console.log('Database connected!');
    }
});
module.exports = connection;
