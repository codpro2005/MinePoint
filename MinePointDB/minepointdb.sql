-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.11-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             10.2.0.5599
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for minepoint
DROP DATABASE IF EXISTS `minepoint`;
CREATE DATABASE IF NOT EXISTS `minepoint` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `minepoint`;

-- Dumping structure for table minepoint.subscription
DROP TABLE IF EXISTS `subscription`;
CREATE TABLE IF NOT EXISTS `subscription` (
  `ID` char(38) NOT NULL,
  `Expiration` datetime NOT NULL,
  `RAM` int(11) NOT NULL DEFAULT 0,
  `fk_user` char(38) NOT NULL,
  PRIMARY KEY (`ID`),
  KEY `fk_user` (`fk_user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table minepoint.subscription: ~0 rows (approximately)
DELETE FROM `subscription`;
/*!40000 ALTER TABLE `subscription` DISABLE KEYS */;
/*!40000 ALTER TABLE `subscription` ENABLE KEYS */;

-- Dumping structure for table minepoint.user
DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `ID` char(38) NOT NULL,
  `Mail` varchar(254) NOT NULL,
  `Password` char(65) NOT NULL,
  `SetUp` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`ID`),
  UNIQUE KEY `Mail` (`Mail`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table minepoint.user: ~0 rows (approximately)
DELETE FROM `user`;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
