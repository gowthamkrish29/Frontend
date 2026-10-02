create database data;
use data;


create table department(
departmentid int primary key auto_increment,
departname varchar(50),
place varchar(70)
);

create table staffs(
staffid int primary key auto_increment,
Name varchar(30),
Age int,
Gender varchar(10),
Salary decimal(20)
);


create table members(
memberid int primary key auto_increment,
membername varchar(30),
phone int (20),
email varchar(30),
city varchar(50)
);



INSERT INTO department (departname , place) value ("ECE" , "TRICHY"),("CSE","MADURAI"),("EEE", "KOVAI"),("CS","CHENNAI"),("MECH","NELLAI");


