CREATE DATABASE companyTask_db;
USE companyTask_db;

CREATE TABLE departments (
    dept_id INT PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(50) NOT NULL,
    location VARCHAR(50),
    manager_name VARCHAR(50)
);

INSERT INTO departments (dept_name, location, manager_name)
VALUES
('IT', 'Chennai', 'Arun'),
('HR', 'Salem', 'Priya'),
('Finance', 'Bangalore', 'Kumar'),
('Marketing', 'Trichy', 'Divya'),
('Sales', 'Coimbatore', 'Ravi');

drop table departments;

drop database companyTask_db;