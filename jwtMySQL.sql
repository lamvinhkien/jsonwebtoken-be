-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: jwt
-- ------------------------------------------------------
-- Server version	9.0.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `group`
--

DROP TABLE IF EXISTS group;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `group` (
  id int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group`
--

LOCK TABLES group WRITE;
/*!40000 ALTER TABLE group DISABLE KEYS */;
INSERT INTO group VALUES (1,'Manager','Manager\'s Company','2024-06-24 16:30:52','2024-11-20 07:43:04'),(3,'Admin','Admin','2024-07-15 11:59:35','2024-11-20 07:42:33'),(4,'Employee','Employee\'s Company','2024-07-15 11:59:35','2024-11-20 07:43:19');
/*!40000 ALTER TABLE group ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group_role`
--

DROP TABLE IF EXISTS group_role;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE group_role (
  id int NOT NULL AUTO_INCREMENT,
  groupId int DEFAULT NULL,
  roleId int DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=493 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_role`
--

LOCK TABLES group_role WRITE;
/*!40000 ALTER TABLE group_role DISABLE KEYS */;
INSERT INTO group_role VALUES (61,2,1,'2024-08-06 07:59:42','2024-08-06 07:59:42'),(62,2,4,'2024-08-06 07:59:42','2024-08-06 07:59:42'),(63,2,11,'2024-08-06 07:59:42','2024-08-06 07:59:42'),(64,2,12,'2024-08-06 07:59:42','2024-08-06 07:59:42'),(65,2,13,'2024-08-06 07:59:42','2024-08-06 07:59:42'),(66,2,15,'2024-08-06 07:59:42','2024-08-06 07:59:42'),(67,2,16,'2024-08-06 07:59:42','2024-08-06 07:59:42'),(68,2,17,'2024-08-06 07:59:42','2024-08-06 07:59:42'),(449,14,4,'2024-11-25 08:12:31','2024-11-25 08:12:31'),(465,1,4,'2024-12-01 15:50:01','2024-12-01 15:50:01'),(466,1,46,'2024-12-01 15:50:01','2024-12-01 15:50:01'),(467,1,48,'2024-12-01 15:50:01','2024-12-01 15:50:01'),(468,1,16,'2024-12-01 15:50:01','2024-12-01 15:50:01'),(469,1,47,'2024-12-01 15:50:01','2024-12-01 15:50:01'),(470,1,17,'2024-12-01 15:50:01','2024-12-01 15:50:01'),(471,1,45,'2024-12-01 15:50:01','2024-12-01 15:50:01'),(472,1,1,'2024-12-01 15:50:01','2024-12-01 15:50:01'),(473,1,49,'2024-12-01 15:50:01','2024-12-01 15:50:01'),(474,4,50,'2024-12-01 15:50:12','2024-12-01 15:50:12'),(475,4,51,'2024-12-01 15:50:12','2024-12-01 15:50:12'),(476,4,45,'2024-12-01 15:50:12','2024-12-01 15:50:12'),(477,3,40,'2024-12-01 15:50:39','2024-12-01 15:50:39'),(478,3,43,'2024-12-01 15:50:39','2024-12-01 15:50:39'),(479,3,4,'2024-12-01 15:50:39','2024-12-01 15:50:39'),(480,3,46,'2024-12-01 15:50:39','2024-12-01 15:50:39'),(481,3,42,'2024-12-01 15:50:39','2024-12-01 15:50:39'),(482,3,48,'2024-12-01 15:50:39','2024-12-01 15:50:39'),(483,3,16,'2024-12-01 15:50:39','2024-12-01 15:50:39'),(484,3,44,'2024-12-01 15:50:39','2024-12-01 15:50:39'),(485,3,12,'2024-12-01 15:50:39','2024-12-01 15:50:39'),(486,3,47,'2024-12-01 15:50:39','2024-12-01 15:50:39'),(487,3,17,'2024-12-01 15:50:39','2024-12-01 15:50:39'),(488,3,41,'2024-12-01 15:50:39','2024-12-01 15:50:39'),(489,3,15,'2024-12-01 15:50:39','2024-12-01 15:50:39'),(490,3,45,'2024-12-01 15:50:39','2024-12-01 15:50:39'),(491,3,1,'2024-12-01 15:50:39','2024-12-01 15:50:39'),(492,3,49,'2024-12-01 15:50:39','2024-12-01 15:50:39');
/*!40000 ALTER TABLE group_role ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS role;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  id int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES role WRITE;
/*!40000 ALTER TABLE role DISABLE KEYS */;
INSERT INTO role VALUES (1,'/user/show-all','View all users','2024-06-24 16:31:32','2024-08-03 05:03:15'),(4,'/user/create','Create new user','2024-07-25 09:22:03','2024-08-02 08:59:42'),(12,'/role/update','Update role','2024-08-01 09:32:24','2024-08-02 09:00:07'),(15,'/role/show-all','View all roles','2024-08-01 15:52:25','2024-08-01 15:52:25'),(16,'/user/delete','Delete user','2024-08-02 09:00:37','2024-08-02 09:00:37'),(17,'/user/update','Update user','2024-08-02 09:00:37','2024-08-02 09:00:37'),(40,'/group/assign-role-for-group','Assign role for group','2024-08-06 07:54:58','2024-09-08 23:48:42'),(41,'/group/show-all-with-pagination','View all groups','2024-08-07 08:36:34','2024-08-07 08:36:34'),(42,'/group/delete','Delete group','2024-08-07 08:46:39','2024-08-07 08:46:39'),(43,'/group/create','Create group','2024-08-07 08:46:39','2024-08-07 08:46:39'),(44,'/group/update','Update group','2024-08-07 08:46:39','2024-08-07 09:11:31'),(45,'/task/show-all','View all tasks','2024-11-25 12:00:00','2024-11-25 12:00:00'),(46,'/task/create','Create task','2024-11-25 12:00:00','2024-11-25 12:00:00'),(47,'/task/update','Update task','2024-11-25 12:00:00','2024-11-25 12:00:00'),(48,'/task/delete','Delete task','2024-11-25 12:00:00','2024-11-25 12:00:00'),(49,'/task/show-all-report-by-manager','View task report','2024-11-25 12:00:00','2024-11-25 12:00:00'),(50,'/task/create-report','Create task report','2024-11-25 12:00:00','2024-11-25 12:00:00'),(51,'/task/delete-report','Delete task report','2024-11-25 12:00:00','2024-11-25 12:00:00');
/*!40000 ALTER TABLE role ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sequelizemeta`
--

DROP TABLE IF EXISTS sequelizemeta;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE sequelizemeta (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sequelizemeta`
--

LOCK TABLES sequelizemeta WRITE;
/*!40000 ALTER TABLE sequelizemeta DISABLE KEYS */;
INSERT INTO sequelizemeta VALUES ('20240328035118-create-user.js'),('migrate-group-role.js'),('migrate-group.js'),('migrate-project-user.js'),('migrate-project.js'),('migrate-role.js');
/*!40000 ALTER TABLE sequelizemeta ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS sessions;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE sessions (
  sid varchar(36) NOT NULL,
  expires datetime DEFAULT NULL,
  `data` text,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (sid)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES sessions WRITE;
/*!40000 ALTER TABLE sessions DISABLE KEYS */;
/*!40000 ALTER TABLE sessions ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task`
--

DROP TABLE IF EXISTS task;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE task (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(255) DEFAULT NULL,
  `description` longtext,
  endDate varchar(255) DEFAULT NULL,
  postBy varchar(255) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task`
--

LOCK TABLES task WRITE;
/*!40000 ALTER TABLE task DISABLE KEYS */;
/*!40000 ALTER TABLE task ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_document`
--

DROP TABLE IF EXISTS task_document;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE task_document (
  id int NOT NULL AUTO_INCREMENT,
  TaskID int DEFAULT NULL,
  FilePath varchar(255) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id),
  KEY fk_task_document_task (TaskID),
  CONSTRAINT fk_task_document_task FOREIGN KEY (TaskID) REFERENCES task (id) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_document`
--

LOCK TABLES task_document WRITE;
/*!40000 ALTER TABLE task_document DISABLE KEYS */;
/*!40000 ALTER TABLE task_document ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `task_user_document`
--

DROP TABLE IF EXISTS task_user_document;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE task_user_document (
  id int NOT NULL AUTO_INCREMENT,
  UserID int DEFAULT NULL,
  TaskID int DEFAULT NULL,
  FilePath varchar(255) DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  PRIMARY KEY (id),
  KEY fk_task_user_document_task (TaskID),
  KEY fk_task_user_document_user (UserID),
  CONSTRAINT fk_task_user_document_task FOREIGN KEY (TaskID) REFERENCES task (id) ON DELETE CASCADE,
  CONSTRAINT fk_task_user_document_user FOREIGN KEY (UserID) REFERENCES `user` (id) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=116 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `task_user_document`
--

LOCK TABLES task_user_document WRITE;
/*!40000 ALTER TABLE task_user_document DISABLE KEYS */;
/*!40000 ALTER TABLE task_user_document ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS user;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  id int NOT NULL AUTO_INCREMENT,
  email varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  username varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  address varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  sex varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  phone varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  groupId int DEFAULT NULL,
  createdAt datetime NOT NULL,
  updatedAt datetime NOT NULL,
  refreshToken longtext COLLATE utf8mb4_general_ci,
  typeAccount varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  idFacebook varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  idGoogle varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  codeOTP varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  expiresLock varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  wrongLogin varchar(10) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=132 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES user WRITE;
/*!40000 ALTER TABLE user DISABLE KEYS */;
INSERT INTO user VALUES (61,'lamvinhkien1709@gmail.com','$2a$10$ZY1SAbv2rlM9tmMQD2sZ1ePFQhxTwEWrsP93epQ/CTgm6bnhjgumK','Lâm Vĩnh Kiện','HCM City','Male','0393630443',3,'2024-07-19 14:40:52','2024-12-03 08:25:22','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NjEsImVtYWlsIjoibGFtdmluaGtpZW4xNzA5QGdtYWlsLmNvbSIsInVzZXJuYW1lIjoiTMOibSBWxKluaCBLaeG7h24iLCJwaG9uZSI6IjAzOTM2MzA0NDMiLCJ0eXBlQWNjb3VudCI6IkxPQ0FMIiwiZGF0YSI6eyJpZCI6MywibmFtZSI6IkFkbWluIiwiZGVzY3JpcHRpb24iOiJBZG1pbiIsIlJvbGVzIjpbeyJpZCI6NDAsInVybCI6Ii9ncm91cC9hc3NpZ24tcm9sZS1mb3ItZ3JvdXAiLCJkZXNjcmlwdGlvbiI6IkFzc2lnbiByb2xlIGZvciBncm91cCJ9LHsiaWQiOjQzLCJ1cmwiOiIvZ3JvdXAvY3JlYXRlIiwiZGVzY3JpcHRpb24iOiJDcmVhdGUgZ3JvdXAifSx7ImlkIjo0LCJ1cmwiOiIvdXNlci9jcmVhdGUiLCJkZXNjcmlwdGlvbiI6IkNyZWF0ZSBuZXcgdXNlciJ9LHsiaWQiOjQ2LCJ1cmwiOiIvdGFzay9jcmVhdGUiLCJkZXNjcmlwdGlvbiI6IkNyZWF0ZSB0YXNrIn0seyJpZCI6NDIsInVybCI6Ii9ncm91cC9kZWxldGUiLCJkZXNjcmlwdGlvbiI6IkRlbGV0ZSBncm91cCJ9LHsiaWQiOjQ4LCJ1cmwiOiIvdGFzay9kZWxldGUiLCJkZXNjcmlwdGlvbiI6IkRlbGV0ZSB0YXNrIn0seyJpZCI6MTYsInVybCI6Ii91c2VyL2RlbGV0ZSIsImRlc2NyaXB0aW9uIjoiRGVsZXRlIHVzZXIifSx7ImlkIjo0NCwidXJsIjoiL2dyb3VwL3VwZGF0ZSIsImRlc2NyaXB0aW9uIjoiVXBkYXRlIGdyb3VwIn0seyJpZCI6MTIsInVybCI6Ii9yb2xlL3VwZGF0ZSIsImRlc2NyaXB0aW9uIjoiVXBkYXRlIHJvbGUifSx7ImlkIjo0NywidXJsIjoiL3Rhc2svdXBkYXRlIiwiZGVzY3JpcHRpb24iOiJVcGRhdGUgdGFzayJ9LHsiaWQiOjE3LCJ1cmwiOiIvdXNlci91cGRhdGUiLCJkZXNjcmlwdGlvbiI6IlVwZGF0ZSB1c2VyIn0seyJpZCI6NDEsInVybCI6Ii9ncm91cC9zaG93LWFsbC13aXRoLXBhZ2luYXRpb24iLCJkZXNjcmlwdGlvbiI6IlZpZXcgYWxsIGdyb3VwcyJ9LHsiaWQiOjE1LCJ1cmwiOiIvcm9sZS9zaG93LWFsbCIsImRlc2NyaXB0aW9uIjoiVmlldyBhbGwgcm9sZXMifSx7ImlkIjo0NSwidXJsIjoiL3Rhc2svc2hvdy1hbGwiLCJkZXNjcmlwdGlvbiI6IlZpZXcgYWxsIHRhc2tzIn0seyJpZCI6MSwidXJsIjoiL3VzZXIvc2hvdy1hbGwiLCJkZXNjcmlwdGlvbiI6IlZpZXcgYWxsIHVzZXJzIn0seyJpZCI6NDksInVybCI6Ii90YXNrL3Nob3ctYWxsLXJlcG9ydC1ieS1tYW5hZ2VyIiwiZGVzY3JpcHRpb24iOiJWaWV3IHRhc2sgcmVwb3J0In1dfSwiaWF0IjoxNzMzMjE0MzIyLCJleHAiOjE3MzMzODcxMjJ9.C52THUxh9EXzpowTVnJ1cmtsxTYFdM0gWzaFIEKLcfE','LOCAL',NULL,NULL,'338568','0','0'),(122,'1050070008@sv.hcmunre.edu.vn','$2a$10$RQpPU5Uuvp.oMQWY.S0GI.1vj0paPGp8FGcmSz5FFNmtgMV7Kdg1e','Kiện Employee','Tp HCM','Male','0329149822',4,'2024-12-02 08:48:37','2024-12-03 08:02:11','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIyLCJlbWFpbCI6IjEwNTAwNzAwMDhAc3YuaGNtdW5yZS5lZHUudm4iLCJ1c2VybmFtZSI6IlbEqW5oIEtp4buHbiIsInBob25lIjoiMDMyOTE0OTgyMiIsInR5cGVBY2NvdW50IjoiTE9DQUwiLCJkYXRhIjp7ImlkIjo0LCJuYW1lIjoiRW1wbG95ZWUiLCJkZXNjcmlwdGlvbiI6IkVtcGxveWVlJ3MgQ29tcGFueSIsIlJvbGVzIjpbeyJpZCI6NTAsInVybCI6Ii90YXNrL2NyZWF0ZS1yZXBvcnQiLCJkZXNjcmlwdGlvbiI6IkNyZWF0ZSB0YXNrIHJlcG9ydCJ9LHsiaWQiOjUxLCJ1cmwiOiIvdGFzay9kZWxldGUtcmVwb3J0IiwiZGVzY3JpcHRpb24iOiJEZWxldGUgdGFzayByZXBvcnQifSx7ImlkIjo0NSwidXJsIjoiL3Rhc2svc2hvdy1hbGwiLCJkZXNjcmlwdGlvbiI6IlZpZXcgYWxsIHRhc2tzIn1dfSwiaWF0IjoxNzMzMjA3ODg1LCJleHAiOjE3MzMzODA2ODV9.zAksEU_0TYocuygBoTyZnDLLff4cA8j6zSCTyvPSY6g','LOCAL',NULL,NULL,'417931','0','0'),(131,'kien@gmail.com','$2a$10$AqHjHrrN.E.PZ9531zeFv.OQgamwH8ok74ZWFGJkKunLGh8EWRs.C','Kiện Manager','Tp HCM','Male','0909318530',1,'2024-12-03 08:02:01','2024-12-03 08:02:01',NULL,'LOCAL',NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE user ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-03 15:41:30
