create database dqluse;
use dqluse;

CREATE TABLE employees (
    Emp_Id INT PRIMARY KEY AUTO_INCREMENT,
    Emp_Name VARCHAR(50),
    Emp_Department VARCHAR(50),
    Emp_Age INT,
    Emp_Salary INT,
    City VARCHAR(50)
);

INSERT INTO employees
(Emp_Name, Emp_Department, Emp_Age, Emp_Salary, City)
VALUES
('Arun', 'IT', 25, 35000, 'Chennai'),
('Priya', 'IT', 28, 45000, 'Salem'),
('Kumar', 'HR', 30, 28000, 'Trichy'),
('Divya', 'HR', 26, 42000, 'Chennai'),
('Ravi', 'Finance', 32, 55000, 'Madurai'),
('Meena', 'Finance', 29, 48000, 'Salem'),
('Vijay', 'IT', 24, 25000, 'Chennai'),
('Anu', 'Sales', 27, 30000, 'Madurai'),
('Bala', 'Sales', 35, 50000, 'Trichy'),
('Karthik', 'IT', 31, 60000, 'Bangalore');

select*from employees;
-- task1
select * from employees where Emp_Department="IT" and Emp_Salary>30000;
-- task2
select*from employees where Emp_Age between 18 and 25 and City in ("Chennai","Madurai");
-- task3
select Emp_Department,count(*) from employees group by Emp_Department;

select Emp_Department,count(*) as total_emp,avg(Emp_Salary) as avg from employees where Emp_Salary>25000 group by Emp_Department having avg(Emp_Salary)>40000;
select Emp_Department,count(Emp_Department) as total_emp,min(Emp_Salary) as tot_salary from employees group by Emp_Department having min(Emp_Salary)>=30000 ;






