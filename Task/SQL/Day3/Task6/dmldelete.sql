use dml;

SET SQL_SAFE_UPDATES = 0;

create table orders (

 order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100),
    product_name VARCHAR(100),
    quantity INT,
    price DECIMAL(10,2),
    order_date DATE

);


INSERT INTO orders
(customer_name, product_name, quantity, price, order_date)
VALUES
('Arun', 'Laptop', 2, 45000, '2026-02-01'),
('Priya', 'Mouse', 1, 400, '2026-02-02'),
('Karthik', 'Keyboard', 3, 800, '2026-02-03'),
('Divya', 'Pen', 5, 50, '2026-02-04'),
('Sanjay', 'Monitor', 1, 12000, '2026-02-05'),
('Meena', 'USB Cable', 2, 300, '2026-02-06'),
('Ravi', 'Headphones', 4, 1500, '2026-02-07'),
('Kavya', 'Notebook', 1, 100, '2026-02-08'),
('Manoj', 'Printer', 2, 8000, '2026-02-09'),
('Nila', 'Charger', 3, 450, '2026-02-10');

drop table orders;

delete from orders where order_id=4;

-- and na rendu condition um true na antha row delete agum but 
-- or yethachum oru conditon rendula true analum delete pannum antha row ah
delete from orders where quantity<2 or price<500;

delete from orders where quantity<5;


