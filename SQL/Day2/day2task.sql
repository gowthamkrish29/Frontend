create database student;
use student;


create table details(
studentid int primary key auto_increment,
Name varchar(30),
Age int,
Department varchar(20),
City varchar(20)
);


insert into details (Name,Age,Department,City) value ("Gowtham",20,"Computer Science","Chennai"),("Author",36,"EEE","Madurai"),("Jesse",32,"ECE","Coimbatore"),("Mike",45,"CSE","Trichy");



UPDATE details SET City ="Banglore" WHERE studentid=2;

UPDATE details SET City="Mumbai" , Age = 25 WHERE studentid=1;

update details set Department="CSE" Where studentid in (1,2,3);

update details set City="Madurai" where Department="CSE";

delete from details where studentid=4;

alter table details add email varchar(30);


alter table details drop column email;