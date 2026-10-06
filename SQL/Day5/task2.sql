create database college;
use college;


create table emp1(
emp_id int primary key,
emp_name varchar(30),
emp_salary int,
dep_id int
);



create table departments (
dep_id int primary key,
dep_name varchar(20)
);


INSERT INTO emp1 (emp_id, emp_name, emp_salary, dep_id)
VALUES
(1, 'Arun', 45000, 10),
(2, 'Bala', 35000, 40),
(3, 'Kumar', 55000, 40),
(4, 'Priya', 40000, 40);


INSERT INTO departments (dep_id, dep_name)
VALUES
(10, 'IT'),
(20, 'HR'),
(30, 'Finance'),
(40, 'Marketing');


select emp_id , emp_name , emp_salary , emp1.dep_id from emp1 inner join departments on emp1.dep_id = departments.dep_id;