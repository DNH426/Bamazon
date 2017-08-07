var mysql = require("mysql");
var inquirer = require("inquirer");
// Installed a table module where products will be displayed
var Table = require("cli-table");

// Connect to MySQL 
var connection = mysql = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Chicago820!",
    database: "bamazon"
});

// Connect to MySQL database 
connection.connect(function (err) {
    if (err) throw err;
    // Create a callback function 
    displayData(function () {
        start();
    });
});

// Display table with inventory
function displayData(data) {
    var table = new Table({
        head: ['ID Number', 'Product', 'Department', 'Price', 'Quantity Available']
    });
    connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err;
        // Loop through inventory and display each item within the table
        for (var i = 0; i < res.length; i++) {
            table.push([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price.toFixed(2), res[i].stock_quantity])
        }
        console.log(table.toString());
        data();
    });
}

// Use the callback function
function start() {
    // Make room between table and the welcome message
    console.log('\n');
    inquirer.prompt([{
        name: 'userChoice',
        message: 'Welcome to Bamazon! Would you like to shop or exit the store?',
        type: 'rawlist',
        choices: ['Shop', 'Exit']
    }]).then(function (answers) {
        if (answers.userChoice === 'Shop') {
            viewStore();
        } else {
            console.log('\n');
            console.log('Come back soon!');
        }
    })
}

// Create a function that allows the user to purchase items
function viewStore() {
    inquirer.prompt([{
        name: 'ID',
        type: 'input',
        message: 'Please enter the ID of the item you would like to purchase',
    }, {
        name: 'quantity',
        type: 'input',
        message: 'Please input the quantity of the items you want to purchase'
    }]).then(function (answer) {
        connection.query('SELECT product_name, price, stock_quantity FROM products WHERE ?', {
            item_id: answer.id
        }, function (err, res) {
            console.log('Are you sure you want to purchase' + updated.quantity + ' ' + res[0].product_name + ' at $' + res[0].price + 'each?');
            if (res[0].stock_quantity >= updated.quantity) {
                var itemQuantity = res[0].stock_quantity - updated.quantity;
                connection.query('UPDATE products SET ? WHERE ?', [{
                    stock_quantity: itemQuantity
                }, {
                    item_id: answer.id
                }], function (err, res) {});
                var totalCost = res[0].price * answer.quantity;
                console.log('Order confirmed! The total cost is $' + totalCost.toFixed(2));
                displayData();
                start();
            } else {
                console.log('No can do.');
                start();
            }
        });
    })
}
