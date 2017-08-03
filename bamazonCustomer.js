var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Chicago820!",
    database: "bamazon"
})