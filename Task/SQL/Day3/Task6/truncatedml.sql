create database library_db;
use library_db;


create table books (

book_id int primary key auto_increment,
Bname varchar(200) not null,
author varchar(300) not null ,
price int check (price>0),
published_date date,
createat timestamp default current_timestamp,
createby varchar(200) default "nathiya",
updateat timestamp default current_timestamp,
status boolean default true

);
INSERT INTO books (Bname, author, price, published_date)
VALUES
('Wings of Fire', 'APJ Abdul Kalam', 350, '1999-01-01'),
('The Alchemist', 'Paulo Coelho', 400, '1988-01-01'),
('Ponniyin Selvan', 'Kalki', 500, '1950-01-01'),
('Atomic Habits', 'James Clear', 450, '2018-10-16'),
('Rich Dad Poor Dad', 'Robert Kiyosaki', 300, '1997-04-01');

truncate table books;

SELECT * FROM library_db.books;




