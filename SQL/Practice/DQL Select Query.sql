create database details;
use details;


create table employees(
id int primary key auto_increment,
Name varchar(30),
Age int,
Salary int,
Department varchar(30),
City varchar(20)
);


insert into employees (Name,Age,Salary,Department,City) value ("Gowtham",20,45000,"Computer Science","Chennai")

SELECT DATABASE();

select * from employees;

select Name,Salary,City from employees;

INSERT INTO employees (Name, Age, Salary, Department, City)
VALUES
('Victor', 33, 45000, 'EEE', 'Indore'),
('Author', 36, 100000, 'CSE', 'Bangalore'),
('Jesse', 32, 50000, 'ECE', 'Ooty'),
('Mike', 59, 60000, 'Data Scientist', 'Navi Mumbai'),
('Walter', 51, 300000, 'Crime', 'Hyderabad'),
('Saul', 42, 250000, 'Analyst', 'Chennai');

update employees set City="Mumbai" where id = 4;
update employees set City="Delhi" where id = 5;
update employees set City="Chennai" where id In(2,3,4);
update employees set City="Chennai" where id=3;
SELECT * FROM employees;

select Name,Salary from employees;
select Age,City from employees;

select * from employees where Name="Mike";

select id,Name, Salary  from employees where Salary > 10000;

select * from employees where  NOT City="Chennai";

select * from employees where salary between 45000 and 70000;

select * from employees where City in ("Chennai", "Indore" , "Mumbai");


select * from employees where City like "%ai%";

update employees set Department="EEE" where  id=1;

select * from employees;
select distinct * from employees;


select distinct Department AS "Removed Duplicated Values Successfully" from employees;