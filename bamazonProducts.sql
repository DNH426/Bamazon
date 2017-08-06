-- Drop Database if needbe
DROP DATABASE bamazon;

-- Create Database
CREATE DATABASE bamazon;

-- Initiate the database I will be using
USE bamazon;

-- Create a table
CREATE TABLE products(
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NOT NULL,
department_name VARCHAR(100) NOT NULL,
price DECIMAL(10,2) NOT NULL,
stock_quantity INT NOT NULL,
PRIMARY KEY (item_id)
);

-- Insert 10 items into table
INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES('Shaun of the Dead', 'DVD', '12.99', '75');

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES('The Blues Brothers', 'DVD', '10.15', '50');

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES('Fight Club', 'DVD', '15.99', '42');

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES('The Goonies', 'DVD', '18.98', '36');

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES('Pulp Fiction', 'DVD', '10.99', '3');

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES('Me, Myself & Ireen', 'DVD', '11.55', '29');

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES('The Dark Knight', 'DVD', '8.01', '85');

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES('Se7en', 'DVD', '3.02', '42');

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES('The Usual Suspects', 'DVD', '1.03', '10');

INSERT INTO products(product_name, department_name, price, stock_quantity) 
VALUES('Saving Private Ryan', 'DVD', '20.10', '2');

-- Show me the table in MySQL Workbench
SELECT * FROM products;