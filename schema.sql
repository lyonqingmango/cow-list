
DROP DATABASE IF EXISTS cowlist;

CREATE DATABASE cowlist;

USE cowlist;

CREATE TABLE cow (
  id int(10) NOT NULL AUTO_INCREMENT,
  name varchar(50),
  description text,
  PRIMARY KEY (id)
);