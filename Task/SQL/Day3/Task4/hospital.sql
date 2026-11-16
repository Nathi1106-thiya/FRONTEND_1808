use college_db;

create table patients(

patient_ID int primary key auto_increment,
 patient_name varchar(30) not null,
 age int check (age>=10),
 gender varchar(20) not null,
 disease varchar(200) not null,
 admission_date date,
 doctor_name varchar(100) not null,
 createat timestamp default current_timestamp,
 createby varchar(200) default "nathiya",
 updateat timestamp default current_timestamp,
 updateby varchar(200) not null,
 status boolean default true

);

-- column name change panna
alter table patients rename column disease to diagnosis;

-- newcolumn add
alter table patients add column contact_number int;

-- datatype modify ku
alter table patients modify patient_name VARCHAR(150);

-- table rename
alter table patients rename patient_records;






