create database company_db;

use company_db;

create table employees(
Emp_Id int primary key auto_increment,
Emp_Name varchar(50) not null,
Emp_Age int not null,
Emp_Department varchar(50) not null,
Emp_Salary int not null,
Emp_Joining date not null,
createat timestamp default current_timestamp,
createby varchar(20) default "nathi",
updateat timestamp default current_timestamp,
updateby varchar(20) not null,
status boolean default true

);

INSERT INTO employees
(Emp_Name, Emp_Age, Emp_Department, Emp_Salary, Emp_Joining, updateby)
VALUES
('Arun', 25, 'IT', 45000, '2023-01-15', 'admin'),
('Bala', 28, 'HR', 35000, '2022-03-10', 'admin'),
('Kumar', 32, 'IT', 60000, '2021-05-20', 'admin'),
('Ravi', 24, 'Finance', 30000, '2024-02-12', 'admin'),
('Suresh', 30, 'Sales', 40000, '2022-07-18', 'admin'),
('Mohan', 27, 'IT', 55000, '2023-04-25', 'admin'),
('Vijay', 35, 'HR', 50000, '2020-08-14', 'admin'),
('Ajay', 26, 'Finance', 38000, '2023-06-11', 'admin'),
('Mani', 29, 'Sales', 42000, '2021-09-19', 'admin'),
('Raj', 31, 'IT', 65000, '2020-11-05', 'admin'),
('Dinesh', 23, 'HR', 28000, '2024-01-08', 'admin'),
('Praveen', 33, 'Finance', 58000, '2021-12-16', 'admin'),
('Santhosh', 28, 'IT', 48000, '2022-10-21', 'admin'),
('Karthik', 36, 'Sales', 62000, '2019-04-17', 'admin'),
('Surya', 25, 'HR', 32000, '2023-08-09', 'admin'),
('Ganesh', 40, 'Finance', 70000, '2018-06-22', 'admin'),
('Vimal', 27, 'IT', 52000, '2022-02-13', 'admin'),
('Naveen', 29, 'Sales', 45000, '2021-07-30', 'admin'),
('Deepak', 34, 'HR', 55000, '2020-03-18', 'admin'),
('Manoj', 22, 'Finance', 25000, '2024-05-14', 'admin'),
('Sathish', 38, 'IT', 75000, '2019-09-12', 'admin'),
('Prakash', 26, 'Sales', 36000, '2023-11-20', 'admin'),
('Hari', 31, 'HR', 47000, '2022-04-07', 'admin'),
('Gokul', 24, 'Finance', 29000, '2024-03-16', 'admin'),
('Ramesh', 37, 'IT', 68000, '2019-12-25', 'admin'),
('Lokesh', 28, 'Sales', 41000, '2021-01-19', 'admin'),
('Muthu', 30, 'HR', 44000, '2022-08-23', 'admin'),
('Sanjay', 32, 'Finance', 56000, '2020-10-10', 'admin'),
('Yogesh', 25, 'IT', 39000, '2023-07-05', 'admin'),
('Madhan', 39, 'Sales', 72000, '2018-02-28', 'admin');

select* from employees where Emp_Salary>45000;

select Emp_Department,count(*) from employees group by Emp_Department;

select Emp_Name,Emp_Age from employees order by Emp_Age asc;

select Emp_Department,avg(Emp_Salary) as total_avg from employees where Emp_Age>25 group by Emp_Department;
-- 5
SELECT *FROM employees ORDER BY Emp_Salary DESC LIMIT 5;
-- 6
select Emp_Department,count(*) as emp_count from employees where Emp_Salary<50000 and Emp_Department="HR"  group by Emp_Department;

-- 7
select Emp_Department,sum(Emp_Salary) from employees group by Emp_Department;

-- 8
select Emp_Department, max(Emp_Salary) from employees group by Emp_Department;

-- 9
select*from employees where Emp_Joining>"2022-12-31";

-- 10
SELECT Emp_Department, COUNT(*) AS Total_Employees FROM employees GROUP BY Emp_Department HAVING COUNT(*) > 5;

-- 11
SELECT Emp_Department, SUM(Emp_Salary) AS Total_Salary FROM employees WHERE Emp_Salary > 40000 GROUP BY Emp_Department ORDER BY Total_Salary  ASC;

-- 12

 select* from employees order by Emp_Age asc limit 1;
 
--  13

select Emp_Department,avg(Emp_Age) from employees group by Emp_Department having Emp_Age order by Emp_Age asc;


select *from employees;









