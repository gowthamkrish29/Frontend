create database table1;
use table1;

create table stu_1(
stu1_id int primary key auto_increment,
stu1_name varchar(20),
marks int,
course_id int
);

create table course_1(
course_id int primary key auto_increment,
course_name varchar(20)
);


insert into stu_1 (stu1_id , stu1_name ,marks , course_id ) values (1, "Gowtham" , 90 , 101),
(2, "Krish" , 70 , 102),
(3, "Victor" , 60 , 103),
(4, "Author" ,100 , 104);

insert into course_1 (course_id , course_name ) values (101 , "Java" ),
(102 , "Python" ),
(103 , ".NET" ),
(104 , "MERN" );


select stu1_name , marks from stu_1 where marks > 75;


SELECT stu1_name, marks
FROM stu_1
WHERE marks = (SELECT max(marks) FROM stu_1);


select course_1.course_name , count(stu_1.stu1_id)  as total_students from stu_1 inner join course_1 on stu_1.course_id = course_1.course_id group by course_1.course_name;

select stu1_name , course_1.course_name from stu_1 inner join course_1 on stu_1.course_id = course_1.course_id;
SET SQL_SAFE_UPDATES = 0;

delete from stu_1 where marks < 85;

select * from stu_1;
