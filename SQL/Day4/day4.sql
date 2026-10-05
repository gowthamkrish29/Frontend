create database empdata;
use empdata;

create table employees (
id int primary key auto_increment,
Name varchar(30),
Age int,
Department varchar(30),
Salary int,
City varchar(30)
);


insert into employees (Name , Age , Department , Salary , City) values ("Gowtham",20,"IT",45000,"Chennai"),
("Dhoni",43,"IT",150000,"Chennai"),
("Virat",36,"Sales",200000,"Banglore"),
("Raina",30,"Finance",60000,"Chennai"),
("Rohit",35,"NON-IT",100000,"Mumbai"),
("Jadeja",31,"HR",25000,"Rajastan"),
("Hardik",33,"IT",70000,"Gujarat"),
("Gill",26,"NON-IT",10000,"Gujarat"),
("Shreyas",30,"IT",85000,"Punjab"),
("Pant",20,"Sales",25000,"Lucknow");

SELECT * FROM employees;

update employees set Department="HR" where id=4;

select Department , count(*) as employee_count from employees group by Department;


insert into employees (Name , Age , Department , Salary , City) values ("Gayle",44,"Fiance",45000,"Banglore"),
("Malinga",43,"Fiance",75000,"Mumbai");

insert into employees (Name , Age , Department , Salary , City) values ("Bravo",41,"IT",90000,"Chennai"),
("Buttler",35,"NON-IT",35000,"Rajastan");

select Department , sum(Salary) as total_salary from employees group by Department;

select City , count(*) as total_employees from employees group by City;

SELECT Department , count(*) as employee_count from employees group by Department having count(*)>2;

SELECT Name , Department , sum(Salary) as total_salary from employees group by Name ,Department having sum(Salary)>100000;


SELECT id ,Name , Department , avg(Salary) as total_salary from employees group by id , Name ,Department having avg(Salary)>90000;


select Department , count(*) as emp_count , avg(Salary) from employees group by Department having count(*)>=2;


select City , sum(Salary) as total_salary , max(Salary) as max_salary from employees group by City having sum(Salary)>80000;
	
select Department , count(*) as total_employees , sum(Salary) as total_salary , avg(Salary) as average_salary, max(Salary) as max_salary , min(Salary) as min_salary from employees group by Department having count(*)>=2 and avg(Salary)>40000 order by avg(Salary) desc;