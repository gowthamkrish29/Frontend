create database practice;
use practice;


create table tableone(
id int primary key auto_increment,
name varchar(20),
age int,
salary int
);

alter table tableone add city varchar(20);

alter table tableone modify salary decimal(10,2);

alter table tableone drop column age;

truncate table tableone;

drop table tableone;

create table tableone(
id int primary key auto_increment,
name varchar(20),
age int,
salary int
);

insert into tableone (name,age,salary) values ("Gowtham",20,45000),("Krish",21,50000);

update tableone set salary=60000 where id=1;

alter table tableone rename column salary to empsalary;
