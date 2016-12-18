-- MySQL dump 10.13  Distrib 5.7.15, for osx10.11 (x86_64)
--
-- Host: localhost    Database: cms
-- ------------------------------------------------------
-- Server version	5.7.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `address` (
  `idaddress` int(11) NOT NULL AUTO_INCREMENT,
  `idcustomer` int(11) DEFAULT '0',
  `name` varchar(128) DEFAULT NULL,
  `line1` varchar(128) DEFAULT NULL,
  `line2` varchar(128) DEFAULT NULL,
  `line3` varchar(128) DEFAULT NULL,
  `city` varchar(128) DEFAULT NULL,
  `country` varchar(128) DEFAULT NULL,
  `zip` varchar(128) DEFAULT NULL,
  `phone` varchar(128) DEFAULT NULL,
  `state` varchar(128) DEFAULT NULL,
  `firstname` varchar(128) DEFAULT NULL,
  `lastname` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`idaddress`)
) ENGINE=InnoDB AUTO_INCREMENT=145 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `card`
--

DROP TABLE IF EXISTS `card`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `card` (
  `idcard` int(11) NOT NULL AUTO_INCREMENT,
  `idcustomer` int(11) DEFAULT '0',
  `created` datetime DEFAULT NULL,
  `number` varchar(128) DEFAULT NULL,
  `holder` varchar(128) DEFAULT NULL,
  `cvv2` varchar(128) DEFAULT NULL,
  `month` int(11) DEFAULT '0',
  `year` int(11) DEFAULT '0',
  `allowcharges` int(1) DEFAULT '0',
  `allowpayouts` int(11) DEFAULT '0',
  `brand` varchar(128) DEFAULT NULL,
  `type` varchar(128) DEFAULT NULL,
  `bankname` varchar(128) DEFAULT NULL,
  `bankcode` varchar(128) DEFAULT NULL,
  `supportspoints` int(11) DEFAULT '0',
  PRIMARY KEY (`idcard`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `charge`
--

DROP TABLE IF EXISTS `charge`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `charge` (
  `idcharge` int(11) NOT NULL AUTO_INCREMENT,
  `idpaymethod` int(11) DEFAULT '0',
  `idcustomer` int(11) DEFAULT '0',
  `description` varchar(200) DEFAULT NULL,
  `amount` float DEFAULT '0',
  `created` datetime DEFAULT NULL,
  `status` int(11) DEFAULT '0',
  `type` int(11) DEFAULT '0',
  `idshippingaddress` int(11) DEFAULT '0',
  `idbillingaddress` int(11) DEFAULT '0',
  `flags` int(11) DEFAULT '0',
  `data` longtext,
  `currency` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`idcharge`)
) ENGINE=InnoDB AUTO_INCREMENT=359 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `customer` (
  `idcustomer` int(11) NOT NULL AUTO_INCREMENT,
  `iduser` varchar(128) DEFAULT NULL,
  `title` varchar(128) DEFAULT NULL,
  `firstname` varchar(128) DEFAULT NULL,
  `lastname` varchar(128) DEFAULT NULL,
  `birthday` date DEFAULT NULL,
  `phone` varchar(128) DEFAULT NULL,
  `email` varchar(128) DEFAULT NULL,
  PRIMARY KEY (`idcustomer`)
) ENGINE=InnoDB AUTO_INCREMENT=197 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `payment`
--

DROP TABLE IF EXISTS `payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `payment` (
  `idpayment` int(11) NOT NULL AUTO_INCREMENT,
  `idcard` int(11) DEFAULT '0',
  `idcharge` int(11) DEFAULT '0',
  `idtransaction` int(11) DEFAULT '0',
  `idwallet` int(11) DEFAULT '0',
  `created` datetime DEFAULT NULL,
  `driver` varchar(20) DEFAULT NULL,
  `status` int(11) DEFAULT '0',
  `type` int(11) DEFAULT '0',
  `amount` int(11) DEFAULT '0',
  `guid` varchar(10) DEFAULT NULL,
  `ticket` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idpayment`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transaction` (
  `idtransaction` int(11) NOT NULL AUTO_INCREMENT,
  `idcharge` int(11) DEFAULT '0',
  `success` int(11) DEFAULT '0',
  `created` datetime DEFAULT NULL,
  `completed` int(11) DEFAULT '0',
  `mode` int(11) DEFAULT '0',
  `data` longtext,
  PRIMARY KEY (`idtransaction`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `wallet`
--

DROP TABLE IF EXISTS `wallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `wallet` (
  `idwallet` int(11) NOT NULL AUTO_INCREMENT,
  `isdefault` int(1) DEFAULT '0',
  `driverua` varchar(128) DEFAULT NULL,
  `driverphp` varchar(128) DEFAULT NULL,
  `name` varchar(128) DEFAULT NULL,
  `accountid` varchar(255) DEFAULT NULL,
  `accountsecret` varchar(255) DEFAULT NULL,
  `accountpublic` varchar(128) DEFAULT NULL,
  `version` varchar(20) DEFAULT NULL,
  `currency` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`idwallet`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-12-18 10:07:37
