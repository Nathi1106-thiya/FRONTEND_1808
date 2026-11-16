create database doctor_db;
use doctor_db;

create table patients(

patient_id int,
patientName varchar(30),
patientAge int,
patientArea varchar(200),
patientDisecs varchar(100),

primary key(patient_id, patientDisecs)
);

drop table patients;

create table Staffs(

s_id int,
sName varchar(200),
sAge int,
sDepartment varchar(100),

primary key(s_id)
);

create table departments(
d_id int,
dName varchar(200),
dCategory varchar(100),

primary key(d_id,dCategory)
);


create table enrollment(

en_id int auto_increment,
patient_id int,
s_id int,
d_id int,

primary key(en_id,patient_id,s_id,d_id),

foreign key(patient_id)references patients(patient_id),
foreign key(s_id) references Staffs (s_id),
foreign key(d_id) references departments (d_id)
);

insert into enrollment values (1,1,1,1);
drop table enrollment;

insert into patients values (1,"nathi",13,"chennai","fever"),(1,"arun",14,"chennai","mental"),(2,"kumar",14,"chennai","fever");
select * from patients;

insert into Staffs values (1,"kumar",16,"fever"),(2,"arun",14,"heart");

insert into departments values (1,"magesh","good"),(2,"ragul","verygood");

select*from enrollment as en inner join patients as pat inner join Staffs as stf inner join departments as dep on en.patient_id=pat.patient_id and en.s_id=stf.s_id;

-- create table payment(

-- p_id int,
-- payMethod varchar(100),
-- payPerson 

-- );

