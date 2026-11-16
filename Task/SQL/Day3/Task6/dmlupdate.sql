use dml;

SET SQL_SAFE_UPDATES = 1;

create table updatedata(

    staff_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    department VARCHAR(50),
    salary INT,
    city VARCHAR(50)

);

INSERT INTO updatedata (name, department, salary, city)
VALUES
('Arun', 'HR', 25000, 'Salem'),
('Priya', 'IT', 35000, 'Trichy'),
('Karthik', 'Finance', 30000, 'Madurai'),
('Divya', 'HR', 28000, 'Erode'),
('Sanjay', 'Sales', 32000, 'Salem'),
('Meena', 'IT', 40000, 'Trichy'),
('Ravi', 'HR', 27000, 'Madurai'),
('Kavya', 'Finance', 45000, 'Erode');

update updatedata set salary=45000 where staff_id=3;
select*from updatedata;

update updatedata set department="IT" where staff_id=5;

UPDATE updatedata SET salary = salary + 5000 WHERE department = 'HR';

update updatedata SET city = "HR" WHERE salary > 30000;

drop table updatedata;






