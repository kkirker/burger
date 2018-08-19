#create database burgers_db;

use burgers_db;

create table burger (
id int auto_increment,
primary key (id),
burger_name varchar(255),
devoured boolean);