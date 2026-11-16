CREATE DATABASE training_db;
USE training_db;

CREATE TABLE student_course (
    student_id INT,
    student_name VARCHAR(50),
    course_name VARCHAR(50),
    trainer_name VARCHAR(50),
    trainer_phone VARCHAR(15),
    PRIMARY KEY(student_id, course_name)
);

INSERT INTO student_course VALUES
(1, 'Arun', 'Java', 'Kumar', '9876543210'),
(1, 'Arun', 'Python', 'Priya', '9876543211'),
(2, 'Ravi', 'Java', 'Kumar', '9876543210'),
(3, 'Divya', 'React', 'Suresh', '9876543212'),
(4, 'Nila', 'Python', 'Priya', '9876543211');

select * from student_course;

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50)
);

CREATE TABLE courses (
    course_name VARCHAR(50) PRIMARY KEY,
    trainer_name VARCHAR(50),
    trainer_phone VARCHAR(15)
);

CREATE TABLE student_courses (
    student_id INT,
    course_name VARCHAR(50),
    PRIMARY KEY(student_id, course_name),
    FOREIGN KEY(student_id) REFERENCES students(student_id),
    FOREIGN KEY(course_name) REFERENCES courses(course_name)
);

CREATE TABLE trainers (
    trainer_id INT PRIMARY KEY,
    trainer_name VARCHAR(50),
    trainer_phone VARCHAR(15)
);

CREATE TABLE courses_3nf (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(50),
    trainer_id INT,
    FOREIGN KEY(trainer_id) REFERENCES trainers(trainer_id)
);

CREATE TABLE students_3nf (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(50)
);

drop table students_3nf;

CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    PRIMARY KEY(student_id, course_id),
    FOREIGN KEY(student_id) REFERENCES students_3nf(student_id),
    FOREIGN KEY(course_id) REFERENCES courses_3nf(course_id)
);

INSERT INTO students_3nf VALUES
(1, 'Arun'),
(2, 'Ravi'),
(3, 'Divya'),
(4, 'Nila');

INSERT INTO trainers VALUES
(1, 'Kumar', '9876543210'),
(2, 'Priya', '9876543211'),
(3, 'Suresh', '9876543212');

INSERT INTO courses_3nf VALUES
(101, 'Java', 1),
(102, 'Python', 2),
(103, 'React', 3);

INSERT INTO enrollments VALUES
(1, 101),
(1, 102),
(2, 101),
(3, 103),
(4, 102);

-- SELECT
--     s.student_name,
--     c.course_name,
--     t.trainer_name
-- FROM students_3nf s
-- JOIN enrollments e
-- ON s.student_id = e.student_id
-- JOIN courses_3nf c
-- ON e.course_id = c.course_id
-- JOIN trainers t
-- ON c.trainer_id = t.trainer_id;

select* from enrollments;
