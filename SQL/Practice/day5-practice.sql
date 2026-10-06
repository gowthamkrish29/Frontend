create database comp1;
use comp1;


create table stu1(
student_id int primary key,
student_name varchar(20),
course_id int
);


create table course1(
course_id int primary key,
course_name varchar(20),
trainer_name varchar(20)
);


insert into stu1 (student_id ,student_name, course_id) values (1 , "Gowtham" , 201),
(2 , "Krish" , 202),
(3 , "Victor" , 203),
(4 , "Author" , 201),
(5 , "Mike" , 204);


insert into course1 (course_id  ,course_name , trainer_name ) values (201 , "JAVA" ,"Alex"),
(202 , "PYTHON" ,"Karthik"),
(203 , ".NET" ,"Rajesh"),
(204 , "C++" ,"Tilak"),
(205 , "C#" ,"Jesse");

SELECT * FROM course1;

select student_id , student_name , stu1.course_id , course1.course_name from stu1 inner join course1 on stu1.course_id = course1.course_id;
