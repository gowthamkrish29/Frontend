create database company;
use company;

create table emp(
id int primary key auto_increment,
name varchar(30),
age int,
department varchar(30),
salary int,
city varchar(30)
);

alter table emp add email varchar(30);

alter table emp modify column name varchar(50);

alter table emp rename column city to location;


insert into emp (name , age , department , salary , location , email) values ("Arun",32,"IT",20000,"Chennai","arun@gmail.com"),
("Gowtham",20,"IT",45000,"Chennai","krish@gmail.com"),
("Priya",18,"Non-IT",30000,"Nellai","nellai@gmail.com"),
("Divya",20,"IT",40000,"Erode","divya@gmail.com"),
("Menna",30,"Sales",20000,"Chennai","meenu@gmail.com"),
("Anitha",22,"Finance",30000,"Coimbatore","ani@gmail.com"),
("Vijay",45,"HR",20000,"Chennai","vijay@gmail.com"),
("Ajith",50,"IT",70000,"Banglore","ajith@gmail.com"),
("Author",36,"Sales",20000,"Trichy","author@gmail.com"),
("Jesica",32,"IT",16000,"Chennai","jesse@gmail.com");


update emp set salary=28000 where id=1;

update emp set department="IT" where id=3;

update emp set location="Banglore" where id=3;

delete from emp where id=5;

select id,name ,salary from emp where salary < 30000;

delete  from emp where id in (1,7,9,10);

select * from emp;

select name , department , salary from emp;

select name, salary from emp where salary > 35000;

select name, department from emp where department="IT";

select name, age from emp where age>=25  and age<= 30;

select name from emp where name like "A%";

select name from emp where name like "%i%";

select name , salary from emp where salary between 30000 and 45000;

select name , salary from emp where location="Chennai" and salary>=30000;

select name as employee_name , department as department_name , salary as monthly_salary from emp;

