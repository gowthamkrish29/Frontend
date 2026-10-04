create database info;
use info;


create table empdetails(
id int primary key auto_increment,
Name varchar(40),
Age int,
Salary int,
Department varchar(20),
City varchar(20)
);

insert into empdetails (Name,Age,Salary,Department,City) values ("Gowtham",20,45000,"IT","Chennai") , ("Victor",20,10000,"HR","Banglore"),("Author",36,15000,"Sales","Madurai"),("Jesse",32,35000,"Non-IT","Hydrabad"),("Saul",41,40000,"IT","Indore"),("Walter",51,65000,"Testing","Mumbai");

select * from empdetails;

select Name , Salary , City from empdetails;

select Name from empdetails where City="Chennai";

select Name , Salary from empdetails where Salary  > 45000;

select Name ,Age from empdetails where Age < 28;

update empdetails set Age=20 where id=1;

select Name , Salary from empdetails where Salary  >= 40000;

select Name from empdetails where Department Not in ("HR");

select Name , Department , City from empdetails where Department="IT" AND City="Chennai";

select Name , City from empdetails where City="Chennai" OR "Madurai";

select Name ,Age , Salary from empdetails where Salary > 40000 and Age <=30;

select Name , City from empdetails where City  in ("Chennai", "Madurai", "Salem");

select Name , Department from empdetails where Department not in ("IT","HR");

select Name ,City from empdetails where City is not null;

select Name , Salary from empdetails where Salary between 35000 and 50000;

select Name ,Age ,Salary from empdetails where Age between 19 and 30 and City="Chennai";

select Name from empdetails where Name like "A%";

select Name from empdetails where Name like "%vi%";

select distinct  Department from empdetails;

select Name as emp_name , Department as emp_department , Salary as emp_sal from empdetails;