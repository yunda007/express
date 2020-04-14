/*
SQLyog Community v13.1.1 (64 bit)
MySQL - 10.4.11-MariaDB : Database - detodito
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`detodito` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;

USE `detodito`;

/*Table structure for table `auditoriapedidos` */

DROP TABLE IF EXISTS `auditoriapedidos`;

CREATE TABLE `auditoriapedidos` (
  `id_auditoriaPe` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `campo_anterior` varchar(50) DEFAULT NULL,
  `campo_nuevo` varchar(50) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `auditoriapedidos` */

/*Table structure for table `auditoriaproductos` */

DROP TABLE IF EXISTS `auditoriaproductos`;

CREATE TABLE `auditoriaproductos` (
  `id_auditoriaPro` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `campo_anterior` varchar(50) DEFAULT NULL,
  `campo_nuevo` varchar(50) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `auditoriaproductos` */

/*Table structure for table `audoriausuario` */

DROP TABLE IF EXISTS `audoriausuario`;

CREATE TABLE `audoriausuario` (
  `id_auditoriaUser` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `campo_anterior` varchar(50) DEFAULT NULL,
  `campo_nuevo` varchar(50) DEFAULT NULL,
  `fecha` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `audoriausuario` */

/*Table structure for table `pedidos` */

DROP TABLE IF EXISTS `pedidos`;

CREATE TABLE `pedidos` (
  `id_pedido` int(11) DEFAULT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  `valor` int(11) DEFAULT NULL,
  `cantidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `pedidos` */

/*Table structure for table `productos` */

DROP TABLE IF EXISTS `productos`;

CREATE TABLE `productos` (
  `id_usuario` int(11) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `users` varchar(50) DEFAULT NULL,
  `pass` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `productos` */

/*Table structure for table `reportestotales` */

DROP TABLE IF EXISTS `reportestotales`;

CREATE TABLE `reportestotales` (
  `id_reporte` int(11) DEFAULT NULL,
  `cant_pro_mas_vendido` int(11) DEFAULT NULL,
  `nombre_pro` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `reportestotales` */

/*Table structure for table `usuarios` */

DROP TABLE IF EXISTS `usuarios`;

CREATE TABLE `usuarios` (
  `id_usuario` int(11) DEFAULT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `users` varchar(50) DEFAULT NULL,
  `pass` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

/*Data for the table `usuarios` */

/* Trigger structure for table `auditoriapedidos` */

DELIMITER $$

/*!50003 DROP TRIGGER*//*!50032 IF EXISTS */ /*!50003 `Auditoriape` */$$

/*!50003 CREATE */ /*!50017 DEFINER = 'root'@'localhost' */ /*!50003 TRIGGER `Auditoriape` AFTER UPDATE ON `auditoriapedidos` FOR EACH ROW 
	BEGIN 
		INSERT INTO Auditoriapedidos (id_auditoriaPe,id_usuario,campo_anterior,campo_nuevo,fecha) 
	VALUE (NEW.id_auditoriaPe,NEW.id_usuario,NEW.campo_anterior,NEW.campo_nuevo,NEW.fecha,
           OLD.id_auditoriaPe,OLD.id_usuario,OLD.campo_anterior,OLD.campo_nuevo,OLD.fecha,NOW());
           
           
     
	END */$$


DELIMITER ;

/* Trigger structure for table `auditoriaproductos` */

DELIMITER $$

/*!50003 DROP TRIGGER*//*!50032 IF EXISTS */ /*!50003 `Auditoriapro` */$$

/*!50003 CREATE */ /*!50017 DEFINER = 'root'@'localhost' */ /*!50003 TRIGGER `Auditoriapro` AFTER UPDATE ON `auditoriaproductos` FOR EACH ROW 
	BEGIN 
		INSERT INTO  Auditoriaproductos (id_auditoriaPro,id_usuario,campo_anterior,campo_nuevo,fecha) 
	VALUE (NEW.id_auditoriaPro,NEW.id_usuario,NEW.campo_anterior,NEW.campo_nuevo,NEW.fecha,
           OLD.id_auditoriaPro,OLD.id_usuario,OLD.campo_anterior,OLD.campo_nuevo,OLD.fecha,NOW());
           
           
     
	END */$$


DELIMITER ;

/* Trigger structure for table `audoriausuario` */

DELIMITER $$

/*!50003 DROP TRIGGER*//*!50032 IF EXISTS */ /*!50003 `Auditoriauser` */$$

/*!50003 CREATE */ /*!50017 DEFINER = 'root'@'localhost' */ /*!50003 TRIGGER `Auditoriauser` AFTER UPDATE ON `audoriausuario` FOR EACH ROW 
	BEGIN 
		INSERT INTO  audoriaUsuario (id_auditoriaUser,id_usuario,campo_anterior,campo_nuevo,fecha) 
	VALUE (NEW.id_auditoriaUser,NEW.id_usuario,NEW.campo_anterior,NEW.campo_nuevo,NEW.fecha,
           OLD.id_auditoriaUser,OLD.id_usuario,OLD.campo_anterior,OLD.campo_nuevo,OLD.fecha,NOW());
           
           
     
	END */$$


DELIMITER ;

/* Trigger structure for table `reportestotales` */

DELIMITER $$

/*!50003 DROP TRIGGER*//*!50032 IF EXISTS */ /*!50003 `reportesTo` */$$

/*!50003 CREATE */ /*!50017 DEFINER = 'root'@'localhost' */ /*!50003 TRIGGER `reportesTo` AFTER UPDATE ON `reportestotales` FOR EACH ROW 
	BEGIN 
		INSERT INTO  reportesTotales  (id_reporte, cant_pro_mas_vendido, nombre_pro) 
	VALUE (NEW.id_reporte, NEW.cant_pro_mas_vendido, NEW.nombre_pro,
           OLD.id_reporte, OLD.cant_pro_mas_vendido, OLD.nombre_pro,NOW());
           
           
     
	END */$$


DELIMITER ;

/* Procedure structure for procedure `Auditoriapedidos` */

/*!50003 DROP PROCEDURE IF EXISTS  `Auditoriapedidos` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `Auditoriapedidos`()
BEGIN
	CREATE TABLE Auditoriapedidos(id_auditoriaPe int, id_usuario int, campo_anterior varchar(50), campo_nuevo VARCHAR(50),fecha DATETIME);
END */$$
DELIMITER ;

/* Procedure structure for procedure `Auditoriaproductos` */

/*!50003 DROP PROCEDURE IF EXISTS  `Auditoriaproductos` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `Auditoriaproductos`()
BEGIN
	CREATE TABLE Auditoriaproductos(id_auditoriaPro INT, id_usuario INT, campo_anterior VARCHAR(50), campo_nuevo VARCHAR(50),fecha DATETIME);
    END */$$
DELIMITER ;

/* Procedure structure for procedure `audoriaUsuario` */

/*!50003 DROP PROCEDURE IF EXISTS  `audoriaUsuario` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `audoriaUsuario`()
BEGIN
		 CREATE TABLE audoriaUsuario(id_auditoriaUser int, id_usuario int, campo_anterior varchar(50), campo_nuevo varchar(50),fecha DATETIME);
	END */$$
DELIMITER ;

/* Procedure structure for procedure `pedidos` */

/*!50003 DROP PROCEDURE IF EXISTS  `pedidos` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `pedidos`()
BEGIN
		CREATE TABLE pedidos(id_pedido INT, id_producto int,id_usuario INT,valor int, cantidad int);
	END */$$
DELIMITER ;

/* Procedure structure for procedure `productos` */

/*!50003 DROP PROCEDURE IF EXISTS  `productos` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `productos`()
BEGIN
		CREATE TABLE productos(id_producto INT, nombre varchar(50),valor_codigo INT,imagen varchar(50));
	END */$$
DELIMITER ;

/* Procedure structure for procedure `reportesTotales` */

/*!50003 DROP PROCEDURE IF EXISTS  `reportesTotales` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `reportesTotales`()
BEGIN
		CREATE TABLE  reportesTotales(id_reporte INT,     cant_pro_mas_vendido INT, nombre_pro VARCHAR(50));
	END */$$
DELIMITER ;

/* Procedure structure for procedure `usuarios` */

/*!50003 DROP PROCEDURE IF EXISTS  `usuarios` */;

DELIMITER $$

/*!50003 CREATE DEFINER=`root`@`localhost` PROCEDURE `usuarios`()
BEGIN
		CREATE TABLE usuarios(id_usuario INT, nombre varchar(50),users varchar(50),pass varchar(50));
	END */$$
DELIMITER ;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
