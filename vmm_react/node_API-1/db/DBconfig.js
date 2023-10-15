let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    // password: "",
    password: null,
    database: "demo_databse"
});

connection.connect((error) => {
    if (error) throw error;

    if (error) {
        console.log(error);
    }

    console.log("Database Connected");
});

module.exports = connection;