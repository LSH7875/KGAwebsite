-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.5.10-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.2.0.6213
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- kga 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `kga` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `kga`;

-- 테이블 kga.board 구조 내보내기
CREATE TABLE IF NOT EXISTS `board` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) NOT NULL,
  `board_number` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `nickname` varchar(50) NOT NULL,
  `nickname2` varchar(50) NOT NULL,
  `date` datetime NOT NULL DEFAULT current_timestamp(),
  `contents` text NOT NULL,
  `main_image` varchar(11) DEFAULT NULL,
  `hits` int(11) NOT NULL DEFAULT 0,
  `show_hide` int(11) NOT NULL DEFAULT 0,
  `file1` varchar(255) DEFAULT NULL,
  `file2` varchar(255) DEFAULT NULL,
  `file3` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `manager` (`board_number`),
  CONSTRAINT `manager` FOREIGN KEY (`board_number`) REFERENCES `board_manage` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- 테이블 데이터 kga.board:~13 rows (대략적) 내보내기
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` (`id`, `user_id`, `board_number`, `title`, `nickname`, `nickname2`, `date`, `contents`, `main_image`, `hits`, `show_hide`, `file1`, `file2`, `file3`) VALUES
	(1, '111', 11, '뭐하지ss', '22', '22', '2021-06-14 11:26:23', '                    \r\n                    ㅁㅇㄻㄻㅇㄴㄹ\r\n             ssss       \r\n                ', NULL, 9, 0, NULL, NULL, NULL),
	(2, '222', 11, '미니미', '33', '33', '2021-06-14 11:27:52', '정처기 합격', NULL, 1, 0, NULL, NULL, NULL),
	(3, '222', 11, '성공했나', '33', '33', '2021-06-14 11:28:18', '성공했기를', NULL, 1, 0, NULL, NULL, NULL),
	(4, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'fffftttt', '[object Undefined]', '이승희', '2021-06-14 06:38:54', '                    \r\n                ffffttttttff', NULL, 2, 0, NULL, NULL, NULL),
	(5, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'aaaa', '[object Undefined]', '이승희', '2021-06-14 06:46:45', '                    \r\n       aaaaaa', NULL, 1, 0, NULL, NULL, NULL),
	(6, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'dasf', '"이승희"', '이승희', '2021-06-14 06:47:24', '                    \r\n                afdasdf', NULL, 0, 0, NULL, NULL, NULL),
	(7, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㄹㄹㄹㄹ', '"이승희"', '이승희', '2021-06-14 09:47:50', '                    \r\n    ㄹㄹㄹㄹㄹ            ', NULL, 7, 0, NULL, NULL, NULL),
	(9, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㅎㅎㅎㅎ', '"이승희"', '이승희', '2021-06-14 10:17:00', '                    \r\n        ㅎㅎㅎㅎ        ', NULL, 0, 0, NULL, NULL, NULL),
	(10, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㄴㄴㄴㄴ', '"이승희"', '이승희', '2021-06-14 10:17:04', '                    \r\n                ㄴㄴㄴㄴㄴㄴ', NULL, 0, 0, NULL, NULL, NULL),
	(11, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㅎㅎㅎ', '이승희', '이승희', '2021-06-14 10:19:44', '                    \r\n               ㅎㅎㅎㅎ ', NULL, 0, 0, NULL, NULL, NULL),
	(12, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㅇㅇㅇㅇ', '이승희', '이승희', '2021-06-14 10:19:48', '                    \r\n           ㅇㅇㅇㅇ     ', NULL, 0, 0, NULL, NULL, NULL),
	(13, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㅎㅎㅎㅎ', '이승희', '이승희', '2021-06-14 10:19:52', '                    \r\n                ㅎㅎㅎㅎ', NULL, 0, 0, NULL, NULL, NULL),
	(14, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㄴㄴㄴㄴ', '이승희', '이승희', '2021-06-14 10:19:56', '                    \r\n                ㄴㄴㄴㄴㄴ', NULL, 5, 0, NULL, NULL, NULL);
/*!40000 ALTER TABLE `board` ENABLE KEYS */;

-- 테이블 kga.board_manage 구조 내보내기
CREATE TABLE IF NOT EXISTS `board_manage` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group` int(11) NOT NULL DEFAULT 0,
  `board_uri` varchar(200) NOT NULL,
  `board_title` varchar(200) NOT NULL,
  `preview` int(1) NOT NULL DEFAULT 0,
  `read_authority` int(1) NOT NULL DEFAULT -1,
  `write_authority` int(1) NOT NULL DEFAULT 2,
  `form` int(1) NOT NULL DEFAULT 1,
  `file` int(1) NOT NULL DEFAULT 0,
  `show_hide` int(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`),
  KEY `group` (`group`),
  CONSTRAINT `group` FOREIGN KEY (`group`) REFERENCES `group` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- 테이블 데이터 kga.board_manage:~17 rows (대략적) 내보내기
/*!40000 ALTER TABLE `board_manage` DISABLE KEYS */;
INSERT INTO `board_manage` (`id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide`) VALUES
	(1, 1, 'introduction', '학원소개', 0, -1, 3, 2, 0, 1),
	(2, 1, 'history', '연혁', 0, -1, 3, 2, 0, 1),
	(3, 1, 'teachers', '교직원소개', 0, -1, 3, 2, 0, 1),
	(4, 1, 'interior', '시설소개', 0, -1, 3, 2, 0, 1),
	(5, 1, 'location', '오시는길', 0, -1, 3, 2, 0, 1),
	(6, 2, 'curriculum', '커리큘럼', 0, -1, 3, 2, 0, 1),
	(7, 3, 'interview', '취업자인터뷰', 0, -1, 3, 1, 0, 1),
	(8, 3, 'recruit', '취업현황', 0, -1, 3, 4, 0, 1),
	(9, 3, 'portpolio', '포트폴리오', 0, -1, 3, 3, 0, 1),
	(10, 4, 'notice', '공지사항', 0, -1, 2, 1, 0, 1),
	(11, 4, 'review', '수강후기', 0, -1, 2, 1, 0, 1),
	(12, 4, 'ki_story', 'KI이야기', 0, -1, 2, 1, 0, 1),
	(13, 4, 'ki_reporter', 'KI기자단', 0, -1, 2, 1, 0, 1),
	(14, 4, 'ki_professor', '교수칼럼', 0, -1, 2, 1, 0, 1),
	(15, 4, 'blog', '네이버블로그', 0, -1, 2, 2, 0, 1),
	(16, 5, 'apply', '지원하기', 0, -1, 2, 1, 0, 1),
	(17, 5, 'faq', '자주묻는 질문', 0, -1, 2, 1, 0, 1);
/*!40000 ALTER TABLE `board_manage` ENABLE KEYS */;

-- 테이블 kga.curriculum 구조 내보내기
CREATE TABLE IF NOT EXISTS `curriculum` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cur_title` varchar(50) NOT NULL,
  `main_image` varchar(1000) NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `cur_start` datetime NOT NULL,
  `cur_end` datetime NOT NULL,
  `cur_info` text NOT NULL,
  `file1` varchar(255) DEFAULT NULL,
  `file2` varchar(255) DEFAULT NULL,
  `file3` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 kga.curriculum:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `curriculum` DISABLE KEYS */;
/*!40000 ALTER TABLE `curriculum` ENABLE KEYS */;

-- 테이블 kga.form 구조 내보내기
CREATE TABLE IF NOT EXISTS `form` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `form_name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- 테이블 데이터 kga.form:~4 rows (대략적) 내보내기
/*!40000 ALTER TABLE `form` DISABLE KEYS */;
INSERT INTO `form` (`id`, `form_name`) VALUES
	(1, '게시판'),
	(2, '단일'),
	(3, '갤러리'),
	(4, '표');
/*!40000 ALTER TABLE `form` ENABLE KEYS */;

-- 테이블 kga.group 구조 내보내기
CREATE TABLE IF NOT EXISTS `group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(100) NOT NULL,
  `board_uri` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- 테이블 데이터 kga.group:~5 rows (대략적) 내보내기
/*!40000 ALTER TABLE `group` DISABLE KEYS */;
INSERT INTO `group` (`id`, `group_name`, `board_uri`) VALUES
	(1, '학교소개', 'college'),
	(2, '교육과정', 'curriculum'),
	(3, '취업정보', 'job'),
	(4, '커뮤니티', 'community'),
	(5, '상담신청', 'consulting');
/*!40000 ALTER TABLE `group` ENABLE KEYS */;

-- 테이블 kga.mainvideo 구조 내보내기
CREATE TABLE IF NOT EXISTS `mainvideo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `main_image` varchar(1000) NOT NULL,
  `video` varchar(1000) NOT NULL,
  `show_hide` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 kga.mainvideo:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `mainvideo` DISABLE KEYS */;
/*!40000 ALTER TABLE `mainvideo` ENABLE KEYS */;

-- 테이블 kga.popup 구조 내보내기
CREATE TABLE IF NOT EXISTS `popup` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `show_hide` int(1) NOT NULL,
  `popup_width` int(10) NOT NULL,
  `popup_height` int(10) NOT NULL,
  `popup_left` int(10) NOT NULL,
  `popup_top` int(10) NOT NULL,
  `popup_type` datetime NOT NULL,
  `title` varchar(100) NOT NULL,
  `image_file` varchar(1000) NOT NULL,
  `URL` varchar(1000) NOT NULL,
  `link_type` int(1) NOT NULL,
  `hide_term` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 테이블 데이터 kga.popup:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `popup` DISABLE KEYS */;
/*!40000 ALTER TABLE `popup` ENABLE KEYS */;

-- 테이블 kga.user 구조 내보내기
CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) NOT NULL,
  `user_pw` varchar(200) DEFAULT NULL,
  `user_name` varchar(20) DEFAULT NULL,
  `user_email` varchar(50) NOT NULL,
  `user_phone` varchar(11) DEFAULT '',
  `user_day` datetime NOT NULL DEFAULT current_timestamp(),
  `user_grade` int(11) NOT NULL DEFAULT 1,
  `user_sex` int(11) DEFAULT NULL,
  `user_birth` int(6) DEFAULT NULL,
  `ad_agree` int(11) DEFAULT NULL,
  `nickname` varchar(50) NOT NULL,
  `social` varchar(50) NOT NULL DEFAULT 'local',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- 테이블 데이터 kga.user:~3 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `user_id`, `user_pw`, `user_name`, `user_email`, `user_phone`, `user_day`, `user_grade`, `user_sex`, `user_birth`, `ad_agree`, `nickname`, `social`) VALUES
	(1, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', NULL, '이승희', 'nara7875@naver.com', '01049477875', '2021-06-14 04:56:50', 1, NULL, NULL, NULL, '이승희', 'naver'),
	(2, 'ddd', 'lmrP3E6lOdwnVsLQ1wxbOX4GC8nGjvorBV2z7aOk/fU', 'SSS', 'dddd@naver.com', '01011111111', '2021-06-14 08:11:40', 1, 1, 111111, 1, 'DDD', 'local'),
	(3, 'AAA', 'dE1ubhgHmGKibi8NOAQrCYWqfycaNvKI1a5/2jVmdeg', 'AAA', 'AAA@NAVER.COM', '0101111111', '2021-06-14 08:12:18', 1, 1, 111111, 1, 'AAA', 'local');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
