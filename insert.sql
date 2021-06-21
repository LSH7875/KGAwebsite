INSERT INTO `kga`.`board_manage` (`group`, `board_uri`, `board_title`) VALUES ('1', 'history', '연혁');
/* SQL 오류 (1364): Field 'read_authority' doesn't have a default value */
INSERT INTO `kga`.`board_manage` (`group`, `board_uri`, `board_title`, `read_authority`) VALUES ('1', 'history', '연혁', '-1');

SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=2;
UPDATE `kga`.`board_manage` SET `write_authority`='3' WHERE  `id`=2;
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=2;
INSERT INTO `kga`.`board_manage` (`group`, `board_uri`, `board_title`, `read_authority`) VALUES ('1', 'teachers', '교직원소개', '-1');
SELECT LAST_INSERT_ID();
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=3;
ALTER TABLE `board_manage`
	CHANGE COLUMN `read_authority` `read_authority` INT(1) NOT NULL DEFAULT '-1' AFTER `preview`;
SELECT `DEFAULT_COLLATION_NAME` FROM `information_schema`.`SCHEMATA` WHERE `SCHEMA_NAME`='kga';
SHOW TABLE STATUS FROM `kga`;
SHOW FUNCTION STATUS WHERE `Db`='kga';
SHOW PROCEDURE STATUS WHERE `Db`='kga';
SHOW TRIGGERS FROM `kga`;
SELECT *, EVENT_SCHEMA AS `Db`, EVENT_NAME AS `Name` FROM information_schema.`EVENTS` WHERE `EVENT_SCHEMA`='kga';
SELECT * FROM `information_schema`.`COLUMNS` WHERE TABLE_SCHEMA='kga' AND TABLE_NAME='board_manage' ORDER BY ORDINAL_POSITION;
SHOW INDEXES FROM `board_manage` FROM `kga`;
SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE   CONSTRAINT_SCHEMA='kga'   AND TABLE_NAME='board_manage'   AND REFERENCED_TABLE_NAME IS NOT NULL;
SELECT * FROM information_schema.KEY_COLUMN_USAGE WHERE   TABLE_SCHEMA='kga'   AND TABLE_NAME='board_manage'   AND REFERENCED_TABLE_NAME IS NOT NULL;
/* "Unnamed-1" 세션 시작 */
SHOW CREATE TABLE `kga`.`board_manage`;
SELECT * FROM `information_schema`.`CHECK_CONSTRAINTS` WHERE CONSTRAINT_SCHEMA='kga' AND TABLE_NAME='board_manage';
SELECT * FROM `kga`.`board_manage` LIMIT 1000;
ALTER TABLE `board_manage`
	CHANGE COLUMN `read_authority` `read_authority` INT(1) NOT NULL DEFAULT -1 AFTER `preview`;
SELECT `DEFAULT_COLLATION_NAME` FROM `information_schema`.`SCHEMATA` WHERE `SCHEMA_NAME`='kga';
SHOW TABLE STATUS FROM `kga`;
SHOW FUNCTION STATUS WHERE `Db`='kga';
SHOW PROCEDURE STATUS WHERE `Db`='kga';
SHOW TRIGGERS FROM `kga`;
SELECT *, EVENT_SCHEMA AS `Db`, EVENT_NAME AS `Name` FROM information_schema.`EVENTS` WHERE `EVENT_SCHEMA`='kga';
SELECT * FROM `information_schema`.`COLUMNS` WHERE TABLE_SCHEMA='kga' AND TABLE_NAME='board_manage' ORDER BY ORDINAL_POSITION;
SHOW INDEXES FROM `board_manage` FROM `kga`;
SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE   CONSTRAINT_SCHEMA='kga'   AND TABLE_NAME='board_manage'   AND REFERENCED_TABLE_NAME IS NOT NULL;
SELECT * FROM information_schema.KEY_COLUMN_USAGE WHERE   TABLE_SCHEMA='kga'   AND TABLE_NAME='board_manage'   AND REFERENCED_TABLE_NAME IS NOT NULL;
/* "Unnamed-1" 세션 시작 */
SHOW CREATE TABLE `kga`.`board_manage`;
SELECT * FROM `information_schema`.`CHECK_CONSTRAINTS` WHERE CONSTRAINT_SCHEMA='kga' AND TABLE_NAME='board_manage';
SELECT * FROM `kga`.`board_manage` LIMIT 1000;
INSERT INTO `kga`.`board_manage` (`id`, `group`) VALUES ('4', '1');
/* SQL 오류 (1364): Field 'board_uri' doesn't have a default value */
/* #79: Access violation at address 00000000 in module 'heidisql.exe'. Read of address 00000000 Message CharCode:13 Msg:256 */
INSERT INTO `kga`.`board_manage` (`id`, `group`, `board_uri`, `board_title`, `read_authority`) VALUES ('4', '1', 'interior', '시설소개', '-1');
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=4;
ALTER TABLE `board_manage`
	CHANGE COLUMN `read_authority` `read_authority` INT(1) NOT NULL DEFAULT '\'-1' AFTER `preview`;
/* SQL 오류 (1067): Invalid default value for 'read_authority' */
SELECT * FROM `kga`.`board_manage` ORDER BY `id` ASC LIMIT 1000;
INSERT INTO `kga`.`board_manage` (`group`, `board_uri`, `board_title`, `read_authority`, `write_authority`) VALUES ('1', 'location', '오시는길', '-1', '3');
SELECT LAST_INSERT_ID();
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=5;
INSERT INTO `kga`.`board_manage` (`group`, `board_uri`, `board_title`, `read_authority`) VALUES ('2', 'curriculum', '커리큘럼', '-1');
SELECT LAST_INSERT_ID();
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=6;
INSERT INTO `kga`.`board_manage` (`group`, `board_uri`, `board_title`, `read_authority`) VALUES ('3', 'interview', '취업자인터뷰', '-1');
SELECT LAST_INSERT_ID();
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=7;
UPDATE `kga`.`board_manage` SET `write_authority`='3' WHERE  `id`=6;
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=6;
UPDATE `kga`.`board_manage` SET `write_authority`='3' WHERE  `id`=7;
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=7;
UPDATE `kga`.`board_manage` SET `write_authority`='3' WHERE  `id`=3;
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=3;
UPDATE `kga`.`board_manage` SET `write_authority`='3' WHERE  `id`=4;
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=4;
INSERT INTO `kga`.`board_manage` (`group`, `board_uri`, `board_title`, `read_authority`) VALUES ('3', 'recruit', '취업현황', '-1');
SELECT LAST_INSERT_ID();
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=8;
INSERT INTO `kga`.`board_manage` (`group`, `board_uri`, `board_title`, `read_authority`, `write_authority`) VALUES ('3', 'portpolio', '포트폴리오', '-1', '3');
SELECT LAST_INSERT_ID();
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=9;
UPDATE `kga`.`board_manage` SET `write_authority`='3' WHERE  `id`=8;
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=8;
INSERT INTO `kga`.`board_manage` (`group`, `board_uri`, `board_title`, `read_authority`) VALUES ('4', 'notice', '공지사항', '-1');
SELECT LAST_INSERT_ID();
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=10;
INSERT INTO `kga`.`board_manage` (`group`, `board_uri`) VALUES ('4', 'review');
/* SQL 오류 (1364): Field 'board_title' doesn't have a default value */
INSERT INTO `kga`.`board_manage` (`group`, `board_uri`, `board_title`, `read_authority`) VALUES ('4', 'review', '수강후기', '-1');
SELECT LAST_INSERT_ID();
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=11;
/* #71: Access violation at address 00000000 in module 'heidisql.exe'. Read of address 00000000 Message CharCode:13 Msg:256 */
INSERT INTO `kga`.`board_manage` (`group`, `board_uri`, `board_title`, `read_authority`) VALUES ('4', 'ki_story', 'KI이야기', '-1');
SELECT LAST_INSERT_ID();
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=12;
INSERT INTO `kga`.`board_manage` (`group`, `board_uri`, `board_title`) VALUES ('4', 'ki_reporter', 'KI기자단');
SELECT LAST_INSERT_ID();
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=13;
INSERT INTO `kga`.`board_manage` (`group`, `board_uri`, `board_title`) VALUES ('4', 'ki_professor', '교수칼럼');
SELECT LAST_INSERT_ID();
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=14;
INSERT INTO `kga`.`board_manage` (`group`, `board_uri`, `board_title`) VALUES ('4', 'blog', '네이버블로그');
SELECT LAST_INSERT_ID();
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=15;
ALTER TABLE `board_manage`
	CHANGE COLUMN `read_authority` `read_authority` INT(1) NOT NULL DEFAULT '-1' AFTER `preview`;
SELECT `DEFAULT_COLLATION_NAME` FROM `information_schema`.`SCHEMATA` WHERE `SCHEMA_NAME`='kga';
SHOW TABLE STATUS FROM `kga`;
SHOW FUNCTION STATUS WHERE `Db`='kga';
SHOW PROCEDURE STATUS WHERE `Db`='kga';
SHOW TRIGGERS FROM `kga`;
SELECT *, EVENT_SCHEMA AS `Db`, EVENT_NAME AS `Name` FROM information_schema.`EVENTS` WHERE `EVENT_SCHEMA`='kga';
SELECT * FROM `information_schema`.`COLUMNS` WHERE TABLE_SCHEMA='kga' AND TABLE_NAME='board_manage' ORDER BY ORDINAL_POSITION;
SHOW INDEXES FROM `board_manage` FROM `kga`;
SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE   CONSTRAINT_SCHEMA='kga'   AND TABLE_NAME='board_manage'   AND REFERENCED_TABLE_NAME IS NOT NULL;
SELECT * FROM information_schema.KEY_COLUMN_USAGE WHERE   TABLE_SCHEMA='kga'   AND TABLE_NAME='board_manage'   AND REFERENCED_TABLE_NAME IS NOT NULL;
SELECT * FROM `kga`.`board_manage` ORDER BY `id` ASC LIMIT 1000;
/* "Unnamed-1" 세션 시작 */
SELECT * FROM `information_schema`.`COLUMNS` WHERE TABLE_SCHEMA='kga' AND TABLE_NAME='form' ORDER BY ORDINAL_POSITION;
SHOW INDEXES FROM `form` FROM `kga`;
SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE   CONSTRAINT_SCHEMA='kga'   AND TABLE_NAME='form'   AND REFERENCED_TABLE_NAME IS NOT NULL;
SELECT * FROM information_schema.KEY_COLUMN_USAGE WHERE   TABLE_SCHEMA='kga'   AND TABLE_NAME='form'   AND REFERENCED_TABLE_NAME IS NOT NULL;
SHOW CREATE TABLE `kga`.`form`;
SELECT * FROM `information_schema`.`CHECK_CONSTRAINTS` WHERE CONSTRAINT_SCHEMA='kga' AND TABLE_NAME='form';
SELECT * FROM `kga`.`form` LIMIT 1000;
SHOW CREATE TABLE `kga`.`board_manage`;
SELECT * FROM `information_schema`.`CHECK_CONSTRAINTS` WHERE CONSTRAINT_SCHEMA='kga' AND TABLE_NAME='board_manage';
SELECT * FROM `kga`.`board_manage` ORDER BY `id` ASC LIMIT 1000;
UPDATE `kga`.`board_manage` SET `form`='2' WHERE  `id`=1;
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=1;
UPDATE `kga`.`board_manage` SET `form`='2' WHERE  `id`=2;
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=2;
UPDATE `kga`.`board_manage` SET `form`='2' WHERE  `id`=3;
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=3;
UPDATE `kga`.`board_manage` SET `form`='2' WHERE  `id`=4;
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=4;
UPDATE `kga`.`board_manage` SET `form`='2' WHERE  `id`=5;
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=5;
UPDATE `kga`.`board_manage` SET `form`='12' WHERE  `id`=6;
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=6;
UPDATE `kga`.`board_manage` SET `form`='3' WHERE  `id`=8;
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=8;
UPDATE `kga`.`board_manage` SET `form`='2' WHERE  `id`=6;
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=6;
UPDATE `kga`.`board_manage` SET `form`='4' WHERE  `id`=9;
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=9;
UPDATE `kga`.`board_manage` SET `form`='2' WHERE  `id`=15;
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=15;
SELECT * FROM `kga`.`board_manage` ORDER BY `id` DESC LIMIT 1000;
SELECT * FROM `kga`.`board_manage` LIMIT 1000;
INSERT INTO `kga`.`board_manage` (`group`, `board_uri`, `board_title`) VALUES ('5', 'apply', '지원하기');
SELECT LAST_INSERT_ID();
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=16;
/* #90: Access violation at address 00000000 in module 'heidisql.exe'. Read of address 00000000 Message CharCode:13 Msg:256 */
INSERT INTO `kga`.`board_manage` (`group`, `board_uri`, `board_title`) VALUES ('5', 'faq', '자주묻는 질문');
SELECT LAST_INSERT_ID();
SELECT `id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide` FROM `kga`.`board_manage` WHERE  `id`=17;
SELECT * FROM `information_schema`.`COLUMNS` WHERE TABLE_SCHEMA='kga' AND TABLE_NAME='user' ORDER BY ORDINAL_POSITION;
SHOW INDEXES FROM `user` FROM `kga`;
SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE   CONSTRAINT_SCHEMA='kga'   AND TABLE_NAME='user'   AND REFERENCED_TABLE_NAME IS NOT NULL;
SELECT * FROM information_schema.KEY_COLUMN_USAGE WHERE   TABLE_SCHEMA='kga'   AND TABLE_NAME='user'   AND REFERENCED_TABLE_NAME IS NOT NULL;
SHOW CREATE TABLE `kga`.`user`;
SELECT * FROM `information_schema`.`CHECK_CONSTRAINTS` WHERE CONSTRAINT_SCHEMA='kga' AND TABLE_NAME='user';
SELECT * FROM `information_schema`.`COLUMNS` WHERE TABLE_SCHEMA='kga' AND TABLE_NAME='curriculum' ORDER BY ORDINAL_POSITION;
SHOW INDEXES FROM `curriculum` FROM `kga`;
SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE   CONSTRAINT_SCHEMA='kga'   AND TABLE_NAME='curriculum'   AND REFERENCED_TABLE_NAME IS NOT NULL;
SELECT * FROM information_schema.KEY_COLUMN_USAGE WHERE   TABLE_SCHEMA='kga'   AND TABLE_NAME='curriculum'   AND REFERENCED_TABLE_NAME IS NOT NULL;
SHOW CREATE TABLE `kga`.`curriculum`;
SELECT * FROM `information_schema`.`CHECK_CONSTRAINTS` WHERE CONSTRAINT_SCHEMA='kga' AND TABLE_NAME='curriculum';
SHOW CREATE TABLE `kga`.`board_manage`;
SELECT * FROM `kga`.`board_manage` LIMIT 1000;

-- 커리큘럼 SQL문 만들기..
-- CREATE TABLE `kga_curriculum` (
-- 	`title` VARCHAR(100) NULL DEFAULT NULL,
-- 	`start_date` DATE NULL,
-- 	`end_date` DATE NULL,
-- 	`recruit` DATETIME NULL,
-- 	`location` TEXT NULL,
-- 	`fee` INT NULL DEFAULT NULL
-- )
-- COMMENT='커리큘럼데이터\r\n'
-- COLLATE='utf8_general_ci'
-- ;
-- SELECT `DEFAULT_COLLATION_NAME` FROM `information_schema`.`SCHEMATA` WHERE `SCHEMA_NAME`='kga';
-- SHOW TABLE STATUS FROM `kga`;
-- SHOW FUNCTION STATUS WHERE `Db`='kga';
-- SHOW PROCEDURE STATUS WHERE `Db`='kga';
-- SHOW TRIGGERS FROM `kga`;
-- SELECT *, EVENT_SCHEMA AS `Db`, EVENT_NAME AS `Name` FROM information_schema.`EVENTS` WHERE `EVENT_SCHEMA`='kga';
-- SELECT * FROM `information_schema`.`COLUMNS` WHERE TABLE_SCHEMA='kga' AND TABLE_NAME='kga_curriculum' ORDER BY ORDINAL_POSITION;
-- SHOW INDEXES FROM `kga_curriculum` FROM `kga`;
-- SELECT * FROM information_schema.REFERENTIAL_CONSTRAINTS WHERE   CONSTRAINT_SCHEMA='kga'   AND TABLE_NAME='kga_curriculum'   AND REFERENCED_TABLE_NAME IS NOT NULL;
-- SELECT * FROM information_schema.KEY_COLUMN_USAGE WHERE   TABLE_SCHEMA='kga'   AND TABLE_NAME='kga_curriculum'   AND REFERENCED_TABLE_NAME IS NOT NULL;
-- /* "Unnamed-1" 세션 시작 */
-- SHOW CREATE TABLE `kga`.`kga_curriculum`;
-- SELECT CONSTRAINT_NAME, CHECK_CLAUSE FROM `information_schema`.`CHECK_CONSTRAINTS` WHERE CONSTRAINT_SCHEMA='kga' AND TABLE_NAME='kga_curriculum';
-- SHOW CHARSET;
-- SELECT 'kga' AS `Database`, 'kga_curriculum' AS `Table`, 0 AS `Rows`, 0 AS `Duration`;
-- /*!40101 SET @OLD_LOCAL_SQL_MODE=@@SQL_MODE, SQL_MODE='' */;
-- SHOW CREATE TABLE `kga`.`kga_curriculum`;
-- SELECT * FROM `kga`.`kga_curriculum` LIMIT 104857600;
-- /*!40101 SET SQL_MODE=IFNULL(@OLD_LOCAL_SQL_MODE, '') */;