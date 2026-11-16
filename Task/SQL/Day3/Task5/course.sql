use college_db;

create table courses (

courseId int primary key auto_increment,
coursename varchar(300) not null unique,
duration varchar(200) default "3Months",
fees int check(fees>0),
trainername varchar(200) not null,
startdate date not null unique,
createat timestamp default current_timestamp,
createby varchar(200) default "nathiya",
updateat timestamp default current_timestamp,
updateby varchar(200) not null,
status boolean default true

);

alter table courses add column course_status varchar(200) after startdate;

alter table courses change trainer_name  instructor_name varchar(200) not null;

alter table courses drop column startdate;