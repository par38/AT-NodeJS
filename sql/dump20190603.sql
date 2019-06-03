CREATE DATABASE  IF NOT EXISTS `atelier_db` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;
USE `atelier_db`;
-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: atelier_db
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.18.04.1

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
-- Table structure for table `biblio`
--

DROP TABLE IF EXISTS `biblio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `biblio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` date DEFAULT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fr_media` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `biblio`
--

LOCK TABLES `biblio` WRITE;
/*!40000 ALTER TABLE `biblio` DISABLE KEYS */;
/*!40000 ALTER TABLE `biblio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES (1,'RIVP');
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credits`
--

DROP TABLE IF EXISTS `credits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `credits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `credit` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credits`
--

LOCK TABLES `credits` WRITE;
/*!40000 ALTER TABLE `credits` DISABLE KEYS */;
INSERT INTO `credits` VALUES (1,'Unsplash'),(2,'Sergio GRAZIA');
/*!40000 ALTER TABLE `credits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media`
--

DROP TABLE IF EXISTS `media`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `media` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `alt` varchar(150) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `picture_small` varchar(200) COLLATE utf8_unicode_ci DEFAULT NULL,
  `main` tinyint(1) DEFAULT '0',
  `picture_large` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `landing_page` tinyint(1) NOT NULL DEFAULT '0',
  `media_order` int(2) NOT NULL,
  `projects_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`projects_id`),
  KEY `fk_media_projects1_idx` (`projects_id`),
  CONSTRAINT `fk_media_projects1` FOREIGN KEY (`projects_id`) REFERENCES `projects` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media`
--

LOCK TABLES `media` WRITE;
/*!40000 ALTER TABLE `media` DISABLE KEYS */;
INSERT INTO `media` VALUES (2,'Lille Doge','Lille Doge description',NULL,0,'https://www.rabotdutilleul.com/sites/default/files/realisations/im-principale_doge_0.jpg',1,1,1),(3,'boat','boat descr','https://tritonmag.com/wp-content/uploads/2017/09/ucsd-scma-hero.jpg',1,'https://tritonmag.com/wp-content/uploads/2017/09/ucsd-scma-hero.jpg',0,2,1),(4,'sea','sea desc','https://www.noted.co.nz/media/21463/ls4018_14_wave_gi_958122400.jpg',1,'https://www.noted.co.nz/media/21463/ls4018_14_wave_gi_958122400.jpg',0,3,2),(5,'fish','fish',NULL,0,'https://geographical.co.uk/media/k2/items/cache/d0d5caef53a97465ee5797663b3cd459_XL.jpg',0,4,1),(6,'palm','palm descr',NULL,0,'http://wellworthsurgical.com/wp-content/uploads/parser/sea-background-1.jpg',0,5,1),(7,'test','testDescription','littlePicture',0,'large',0,3,2);
/*!40000 ALTER TABLE `media` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `media_has_credits`
--

DROP TABLE IF EXISTS `media_has_credits`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `media_has_credits` (
  `media_id` int(11) NOT NULL,
  `credits_id` int(11) NOT NULL,
  PRIMARY KEY (`media_id`,`credits_id`),
  KEY `fk_media_has_credits_credits1_idx` (`credits_id`),
  KEY `fk_media_has_credits_media1_idx` (`media_id`),
  CONSTRAINT `fk_media_has_credits_credits1` FOREIGN KEY (`credits_id`) REFERENCES `credits` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_media_has_credits_media1` FOREIGN KEY (`media_id`) REFERENCES `media` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `media_has_credits`
--

LOCK TABLES `media_has_credits` WRITE;
/*!40000 ALTER TABLE `media_has_credits` DISABLE KEYS */;
INSERT INTO `media_has_credits` VALUES (2,2);
/*!40000 ALTER TABLE `media_has_credits` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partners`
--

DROP TABLE IF EXISTS `partners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `partners` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `partner_name` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partners`
--

LOCK TABLES `partners` WRITE;
/*!40000 ALTER TABLE `partners` DISABLE KEYS */;
INSERT INTO `partners` VALUES (1,'Barclay Crousse Architecture');
/*!40000 ALTER TABLE `partners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `city` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `text` longtext COLLATE utf8_unicode_ci,
  `address` varchar(155) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date` date DEFAULT NULL,
  `surface_area` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cost` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `project_order` int(2) NOT NULL,
  `type_of_project` enum('Bureaux','Logements','Commerces','Urbanisme','Equipement','Paysage','Musée','Ouvrage d''art') COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'Lille','Le Doge','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar ante nulla, blandit bibendum ante sagittis a. Fusce a feugiat ex. Proin vel est ut orci hendrerit porttitor a venenatis lorem. Fusce sagittis felis eget semper consectetur. Etiam interdum ligula vitae lobortis pellentesque. \r\n\r\nNullam nec varius orci. Pellentesque bibendum arcu lectus, vel hendrerit enim egestas ac. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam pellentesque erat a venenatis dapibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ','Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ','2018-05-03','900','1000000',1,'Bureaux'),(2,'Nantes','title 2','Lorem bla bla bla bla bla bla cbla bla bla bla bla bla','adresse 2','2019-05-08','1200','2000000',2,'Logements');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects_has_clients`
--

DROP TABLE IF EXISTS `projects_has_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects_has_clients` (
  `projects_id` int(11) NOT NULL,
  `clients_id` int(11) NOT NULL,
  PRIMARY KEY (`projects_id`,`clients_id`),
  KEY `fk_projects_has_clients_clients1_idx` (`clients_id`),
  KEY `fk_projects_has_clients_projects1_idx` (`projects_id`),
  CONSTRAINT `fk_projects_has_clients_clients1` FOREIGN KEY (`clients_id`) REFERENCES `clients` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_projects_has_clients_projects1` FOREIGN KEY (`projects_id`) REFERENCES `projects` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects_has_clients`
--

LOCK TABLES `projects_has_clients` WRITE;
/*!40000 ALTER TABLE `projects_has_clients` DISABLE KEYS */;
INSERT INTO `projects_has_clients` VALUES (1,1),(2,1);
/*!40000 ALTER TABLE `projects_has_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects_has_partners`
--

DROP TABLE IF EXISTS `projects_has_partners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `projects_has_partners` (
  `projects_id` int(11) NOT NULL,
  `partners_id` int(11) NOT NULL,
  PRIMARY KEY (`projects_id`,`partners_id`),
  KEY `fk_projects_has_partners_partners1_idx` (`partners_id`),
  KEY `fk_projects_has_partners_projects1_idx` (`projects_id`),
  CONSTRAINT `fk_projects_has_partners_partners1` FOREIGN KEY (`partners_id`) REFERENCES `partners` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_projects_has_partners_projects1` FOREIGN KEY (`projects_id`) REFERENCES `projects` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects_has_partners`
--

LOCK TABLES `projects_has_partners` WRITE;
/*!40000 ALTER TABLE `projects_has_partners` DISABLE KEYS */;
INSERT INTO `projects_has_partners` VALUES (1,1);
/*!40000 ALTER TABLE `projects_has_partners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `lastname` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `create_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_date` datetime NOT NULL ON UPDATE CURRENT_TIMESTAMP,
  `user_right` enum('admin','user') COLLATE utf8_unicode_ci NOT NULL,
  `fr_bio_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fr_bio_content` longtext COLLATE utf8_unicode_ci,
  `en_bio_title` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `en_bio_content` longtext COLLATE utf8_unicode_ci,
  `address` varchar(150) COLLATE utf8_unicode_ci DEFAULT NULL,
  `mail` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tel` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `linkedin` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `media_id` int(11) NOT NULL,
  PRIMARY KEY (`id`,`media_id`),
  KEY `fk_user_media_idx` (`media_id`),
  CONSTRAINT `fk_user_media` FOREIGN KEY (`media_id`) REFERENCES `media` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-06-03 18:08:43
