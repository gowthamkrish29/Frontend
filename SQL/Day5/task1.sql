create database institute;
use institute;


create table courses(
course_id int primary key,
course_name varchar(30),
trainer_name varchar(30)
);


create table students(
student_id int primary key auto_increment,
student_name varchar(30),
course_id int,

foreign key (course_id) references courses(course_id)
);


insert into courses (course_id, course_name, trainer_name) values (101 , "Java" , "Alex"),
(102 , "Python" , "Krish"),
(103 , "MERN" , "Victor"),
(104 , "C++" , "Rajesh");



INSERT INTO students (student_name, course_id)
VALUES
('Arun', 101),
('Bala', 101),
('Kumar', 102),
('Priya', 101),
('Divya', 102);


SELECT * FROM courses;


UPDATE courses
SET trainer_name = 'Alex'
WHERE course_id = 101;

UPDATE courses
SET trainer_name = 'Krish'
WHERE course_id = 102;

SELECT * FROM students;






