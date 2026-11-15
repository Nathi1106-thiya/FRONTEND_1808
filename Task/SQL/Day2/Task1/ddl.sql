create database college_db;
use college_db;


create table students(

Student_Id int primary key auto_increment,
StudentName varchar(20) not null,
age INT check (age>=18),
email VARCHAR(100) UNIQUE,
course varchar(20) default ("IT"),
fees int check (fees>0),
city VARCHAR(50) DEFAULT 'Chennai',
admission_date DATE,		
createby varchar(20) default "Nathi",
createat timestamp default current_timestamp,
updateby varchar(20),
updateat timestamp default current_timestamp,
status boolean default true


);




