create database employee;
use employee;

create table emp(
empid int primary key auto_increment,
Name varchar(50),
Age int,
Role varchar(50),
Salary int,
Mobile int,
Location varchar(50)
);

ALTER table emp ADD email varchar(30);

ALTER table emp RENAME column Mobile to Number;

alter table emp modify column email char(30);

alter table emp drop column email;

insert into emp (Name , Role) value ("GOWTHAM" , "DEVELOPER") , ("VICTO" , "ANALYST");