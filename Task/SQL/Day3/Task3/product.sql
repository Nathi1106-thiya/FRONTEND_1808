use college_db;

create table products(

product_ID int primary key auto_increment,
product_name varchar(30) not null unique,
price int CHECK (price > 0),
category varchar(200) not null,
stock int DEFAULT 0 CHECK (stock >= 0),
manufacturing_date date,
createby varchar(20) default "nathi",
createat timestamp default current_timestamp,
updateby varchar(100),
upateat timestamp default current_timestamp,
status boolean default true

);

rename table products  to product_details;

-- alter table product_details rename column price to product_price;

alter table product_details change price product_price int  CHECK (price > 0);

alter table product_details drop column manufacturing_date;

