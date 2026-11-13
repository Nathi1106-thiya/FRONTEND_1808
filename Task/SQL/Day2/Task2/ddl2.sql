 use college_db;

create table employees(

emp_id INT PRIMARY KEY AUTO_INCREMENT,
emp_name VARCHAR(100) NOT NULL,
email VARCHAR(100) UNIQUE,
salary DECIMAL(10,2) CHECK (salary > 10000),
department VARCHAR(50) DEFAULT 'IT',
joining_date DATE NOT NULL ,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
craeteby varchar(20) default "nathiya",
status boolean default true

);