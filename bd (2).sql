-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: user_database
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `second_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `sex` tinyint(1) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `registration_date` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (7,'qwe','dfg','sdfhg@gmwail.comaa','$2a$12$LSxY9b3iV4VmZoEcn2p8Ge6hVztd0dtbDK47ewJ0.I.yY4xL2cUfi',0,'7.png',NULL,'2022-06-18 11:54:32'),(8,'kghj',NULL,'51gfka960@mozmail.com','$2a$12$JirpL2GBRWoZO0FefzznCuKd2shojEStsyuv1Rj3Hq7WolIg.snVe',NULL,NULL,NULL,'2022-06-20 06:10:13'),(9,'kghj',NULL,'51gfka960a@mozmail.com','$2a$12$LsVFVwh1kTR3Gvrn.9HuUeb3.ucsWO8VtOcHJJx/kE/SlvumsQZoO',NULL,NULL,NULL,'2022-06-20 08:37:36'),(10,'kghj',NULL,'51gfk0a@mozmail.com','$2a$12$gzJqb0WLuA5zH89s8ThKPOLdjJSkHeFqflc/Xw7qMba8hKFovXSGC',NULL,NULL,NULL,'2022-06-20 08:37:39'),(11,'kghj',NULL,'1@mozmail.com','$2a$12$Au25dbg1mA/GCVUkUmCOw.EfmBY7QWQFY2tgK28SFzuVyL4g0.5eq',NULL,NULL,NULL,'2022-06-20 08:37:43'),(12,'kghj',NULL,'1@gmail.com','$2a$12$2A95aqTwF9US6gaNgWLYv.dY42KrOJggCVKrqSu.7Vjf9EM0HOpQC',NULL,NULL,NULL,'2022-06-20 08:37:46'),(13,'kghj',NULL,'2@gmail.com','$2a$12$M6zNKJ.EBB1rZ/0ODKbQtetNWkx.G6bIiH8FnSxZUQGQBKybXYnI6',NULL,NULL,NULL,'2022-06-20 08:37:48'),(14,'kghj',NULL,'3@gmail.com','$2a$12$.UQ0asqyHjSW..LfXcj23.GITXI2EMgJixPmtW9ofPI72argFnq06',NULL,NULL,NULL,'2022-06-20 08:37:51'),(15,'kghj',NULL,'4@gmail.com','$2a$12$8I.tUyM9GVWhWPZUcE0bx.DyCdsmrT6ceuLBl.mLbmVK0FdZeMaQa',NULL,NULL,NULL,'2022-06-20 08:37:53'),(16,'kghj',NULL,'5@gmail.com','$2a$12$rrHcThnI6AVQ88hVDdHnBeWTofuxL.7oR2HfLZfJTUuivZIcRfvlq',NULL,NULL,NULL,'2022-06-20 08:37:56'),(17,'kghj',NULL,'6@gmail.com','$2a$12$x/v39w1bLhP/ilRDVNlF9ux9mStF6VxlJIEZx7AlKUyVbSVx5ecQ6',NULL,NULL,NULL,'2022-06-20 08:37:58'),(18,'kghj',NULL,'7@gmail.com','$2a$12$eUxZr9wd1cv82fzjOn87Au7NArdvNbrxHqUX2y7Hmtwmzbgey3sYG',NULL,NULL,NULL,'2022-06-20 08:38:00'),(19,'kghj',NULL,'8@gmail.com','$2a$12$wEzhyWM1Oucnz/2c6AQSKe4138Czzi9qZIzxkUm72wK2dqP6tGZgK',NULL,NULL,NULL,'2022-06-20 08:38:02'),(20,'kghj',NULL,'9@gmail.com','$2a$12$Vw2f073IvMcc1ULserDtQOHrRgPSX5BzXaaoNlTGGjlfvuTV.P78S',NULL,NULL,NULL,'2022-06-20 08:38:08'),(21,'kghj',NULL,'0@gmail.com','$2a$12$K42EaQYP7MGyQgSL9RVTP.ro.VmQ5SptlL3BmXh83caN0uQUdXykC',NULL,NULL,NULL,'2022-06-20 08:38:11'),(22,'kghj',NULL,'10@gmail.com','$2a$12$QUcHdVsqZnRgR2fL4dhNZeRJ8qFq7NifSIY1nkZgoKuM0xR9O3txC',NULL,NULL,NULL,'2022-06-20 08:38:13');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-20 16:15:46
