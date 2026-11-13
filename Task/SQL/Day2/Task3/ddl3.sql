create database E_Commerce;

use E_Commerce;

create table product(

product_id INT PRIMARY KEY AUTO_INCREMENT ,
product_name VARCHAR(150) NOT NULL,
product_code VARCHAR(30) UNIQUE,
category VARCHAR(50) NOT NULL,
price DECIMAL(10,2) CHECK (price > 0),
stock INT DEFAULT 0,
brand VARCHAR(50) DEFAULT 'Generic',
manufacture_date DATE,
expiry_date DATE,
is_available BOOLEAN DEFAULT TRUE,
createby varchar(20) default "Nathi",
createat timestamp default current_timestamp,
updateby varchar(20) not null,
updateat timestamp default current_timestamp
);