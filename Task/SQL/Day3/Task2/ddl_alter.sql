use college_db;

create table employee(

emp_id int primary key auto_increment,
name varchar(20),
salary int not null,
department varchar(50) not null,
joining_date date,
city varchar(40) default "bangalour",
createby varchar(20) default "nathi",
createat timestamp default current_timestamp,
updateby varchar(100),
upateat timestamp default current_timestamp,
status boolean default true

);

alter table employee rename column name to employee_name;

