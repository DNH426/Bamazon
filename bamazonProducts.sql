CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY (item_id)
);

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES(
'Shaun of the Dead', 'DVD', '12', '75'

);

SELECT * FROM products;
