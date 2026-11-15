create database dml;

use dml;

create table insertdata(
customer_id INT PRIMARY KEY AUTO_INCREMENT,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE,
city VARCHAR(50),
age INT,
registration_date DATE,
createat timestamp default current_timestamp,
createby varchar(200) default "nathiya",
updateat timestamp default current_timestamp,
-- updateby varchar(200) not null,
status boolean default true

);


INSERT INTO insertdata
(name, email, city, age, registration_date)
VALUES
('Arun', 'arun@gmail.com', 'Chennai', 25, '2026-01-10'),
('Priya', 'priya@gmail.com', 'Salem', 22, '2026-01-11'),
('Karthik', 'karthik@gmail.com', 'Trichy', 28, '2026-01-12'),
('Divya', 'divya@gmail.com', 'Madurai', 24, '2026-01-13'),
('Sanjay', 'sanjay@gmail.com', 'Chennai', 30, '2026-01-14'),
('Meena', 'meena@gmail.com', 'Erode', 26, '2026-01-15'),
('Ravi', 'ravi@gmail.com', 'Salem', 32, '2026-01-16'),
('Kavya', 'kavya@gmail.com', 'Trichy', 21, '2026-01-17'),
('Manoj', 'manoj@gmail.com', 'Chennai', 27, '2026-01-18'),
('Nila', 'nila@gmail.com', 'Coimbatore', 23, '2026-01-19');

-- drop table insertdata;

-- SELECT * FROM dml.insertdata;

INSERT INTO insertdata
(name, email, city, age, registration_date)
VALUES
('Nathi', 'vijay@gmail.com', 'Chennai', 29, '2026-01-20');

INSERT INTO insertdata
(name, email, city, age, registration_date)
VALUES
('Sudha', 'anu@gmail.com', 'Trichy', 25, '2026-01-21');

INSERT INTO insertdata (customer_name, email, city)
VALUES ('Nathiya', 'nathi@gmail.com', 'Bangalore');

select*from insertdata;

alter table insertdata rename column name to customer_name;


