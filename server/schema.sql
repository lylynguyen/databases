CREATE DATABASE chat;

USE chat;

CREATE TABLE roomnames (
  id INT NOT NULL AUTO_INCREMENT,
  name TEXT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  name TEXT NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE messages (
  id INT NOT NULL AUTO_INCREMENT,
  message TEXT NOT NULL,
  roomname INT,
  user INT,
  createAt date,
  PRIMARY KEY(id),
  FOREIGN KEY(roomname) REFERENCES roomnames(id),
  FOREIGN KEY(user) REFERENCES users(id)
);


/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

