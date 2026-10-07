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

select * from emp;

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

insert into emp (name , age , department , salary , location , email) values ("Krish",20,"IT",85000,"Chennai","krish@gmail.com"),
("Maya",22,"IT",35000,"Chennai","maya@gmail.com"),
("Ananya",20,"IT",45000,"Chennai","ananya@gmail.com");

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

 update emp set salary=10000 where id=4;
update emp set department="HR" where id IN(3 , 8);

select * from emp;

select avg(salary) from emp;

select name , salary from emp where salary > (select avg(salary) from emp);

select max(salary) from emp;

select name , salary from emp where salary = (select max(salary) from emp);

select name , salary from emp where salary = (select min(salary) from emp);

select avg(salary) from emp  where department="IT";

select name , salary from emp where salary > (select avg(salary) from emp where department="IT");

select name from emp where department in ("IT" , "HR");

Select name , department from emp where department in (select department from emp where department in ("IT" , "HR") );

select department from emp where department <> "HR";

select name , department from emp where department not in (select department from emp where department = "HR");

SELECT DISTINCT department
FROM emp e
WHERE EXISTS (
    SELECT 1
    FROM emp e2
    WHERE e2.department = e.department
);


select name , salary  from emp where salary = (select max(salary) from emp);


select name , salary from emp where salary < (select max(salary) from emp);


select name , salary , department from emp e where salary = (select avg(salary) from emp e2 where e.department = e2.department);


select * from emp where salary = (select max(salary) from emp);

select avg(salary) from emp;

select name , salary from emp where salary > (select avg(salary) from emp ) order by salary desc;

select name , salary from emp where salary < (select avg(salary) from emp ) ;

select avg(salary) from emp where department="IT";

select name , salary , department from emp where salary > (select avg(salary) from emp where department="IT");

select * from emp where department in("IT" , "HR");

