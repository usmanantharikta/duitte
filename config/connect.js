var mysql = require('mysql');
var connect = mysql.createConnection({
    host: "192.168.22.4",
    user: "pms",
    password: "M@jub3rs@m@",
    database: "live_pms"
});

connect.connect(function(err) {
    if(err) throw err;
});

module.exports = connect;