use dqluse;

CREATE TABLE products (
    Product_Id INT PRIMARY KEY AUTO_INCREMENT,
    Product_Name VARCHAR(50),
    Category VARCHAR(50),
    Stock INT,
    Price INT
);

INSERT INTO products
(Product_Name, Category, Stock, Price)
VALUES
('Laptop', 'Electronics', 10, 45000),
('Mobile', 'Electronics', 20, 15000),
('Tablet', 'Electronics', 15, 20000),
('Shirt', 'Clothing', 30, 800),
('Jeans', 'Clothing', 25, 1200),
('T-Shirt', 'Clothing', 40, 500),
('Rice', 'Grocery', 50, 60),
('Sugar', 'Grocery', 35, 45),
('Oil', 'Grocery', 20, 150),
('Headphones', 'Electronics', 12, 2000);

-- task4
select Category,sum(Stock),avg(price) from products group by Category;