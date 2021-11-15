CREATE TABLE IF NOT EXISTS `staff` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `pass` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `adopted_pet_id` int(11) NOT NULL,
  `timestamp` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `pet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pet_name` varchar(50) NOT NULL,
  `age` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `breed` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `adopted` boolean NOT NULL,
  PRIMARY KEY (`id`)
);

-- Initialize staff table with a staff user
INSERT INTO `staff` (fname, lname, username, pass) 
VALUES ('rootstaff','admin','admin','admin');