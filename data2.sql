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

-- 테이블 데이터 kga.board:~13 rows (대략적) 내보내기
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` (`id`, `user_id`, `board_number`, `title`, `nickname`, `nickname2`, `date`, `contents`, `hits`, `show_hide`, `file1`, `cur_num`, `file3`) VALUES
	(1, '111', 11, '뭐하지ss', '22', '22', '2021-06-14 11:26:23', '                    \r\n                    ㅁㅇㄻㄻㅇㄴㄹ\r\n             ssss       \r\n                ', 9, 0, NULL, 0, NULL),
	(2, '222', 11, '미니미', '33', '33', '2021-06-14 11:27:52', '정처기 합격', 1, 0, NULL, 0, NULL),
	(3, '222', 11, '성공했나', '33', '33', '2021-06-14 11:28:18', '성공했기를', 1, 0, NULL, 0, NULL),
	(4, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'fffftttt', '[object Undefined]', '이승희', '2021-06-14 06:38:54', '                    \r\n                ffffttttttff', 2, 0, NULL, 0, NULL),
	(5, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'aaaa', '[object Undefined]', '이승희', '2021-06-14 06:46:45', '                    \r\n       aaaaaa', 1, 0, NULL, 0, NULL),
	(6, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'dasf', '"이승희"', '이승희', '2021-06-14 06:47:24', '                    \r\n                afdasdf', 0, 0, NULL, 0, NULL),
	(7, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㄹㄹㄹㄹ', '"이승희"', '이승희', '2021-06-14 09:47:50', '                    \r\n    ㄹㄹㄹㄹㄹ            ', 7, 0, NULL, 0, NULL),
	(9, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㅎㅎㅎㅎ', '"이승희"', '이승희', '2021-06-14 10:17:00', '                    \r\n        ㅎㅎㅎㅎ        ', 0, 0, NULL, 0, NULL),
	(10, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㄴㄴㄴㄴ', '"이승희"', '이승희', '2021-06-14 10:17:04', '                    \r\n                ㄴㄴㄴㄴㄴㄴ', 0, 0, NULL, 0, NULL),
	(11, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㅎㅎㅎ', '이승희', '이승희', '2021-06-14 10:19:44', '                    \r\n               ㅎㅎㅎㅎ ', 0, 0, NULL, 0, NULL),
	(12, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㅇㅇㅇㅇ', '이승희', '이승희', '2021-06-14 10:19:48', '                    \r\n           ㅇㅇㅇㅇ     ', 0, 0, NULL, 0, NULL),
	(13, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㅎㅎㅎㅎ', '이승희', '이승희', '2021-06-14 10:19:52', '                    \r\n                ㅎㅎㅎㅎ', 0, 0, NULL, 0, NULL),
	(14, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㄴㄴㄴㄴ', '이승희', '이승희', '2021-06-14 10:19:56', '                    \r\n                ㄴㄴㄴㄴㄴ', 5, 0, NULL, 0, NULL);
/*!40000 ALTER TABLE `board` ENABLE KEYS */;

-- 테이블 데이터 kga.board_manage:~17 rows (대략적) 내보내기
/*!40000 ALTER TABLE `board_manage` DISABLE KEYS */;
INSERT INTO `board_manage` (`id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide`, `curr_id`) VALUES
	(1, 1, 'introduction', '학원소개', 0, -1, 3, 2, 0, 1, 0),
	(2, 1, 'history', '연혁', 0, -1, 3, 2, 0, 1, 0),
	(3, 1, 'teachers', '교직원소개', 0, -1, 3, 2, 0, 1, 0),
	(4, 1, 'interior', '시설소개', 0, -1, 3, 2, 0, 1, 0),
	(5, 1, 'location', '오시는길', 0, -1, 3, 2, 0, 1, 0),
	(6, 2, 'curriculum', '커리큘럼', 0, -1, 3, 2, 0, 1, 0),
	(7, 3, 'interview', '취업자인터뷰', 0, -1, 3, 1, 0, 1, 0),
	(8, 3, 'recruit', '취업현황', 0, -1, 3, 4, 0, 1, 0),
	(9, 3, 'portpolio', '포트폴리오', 0, -1, 3, 3, 0, 1, 0),
	(10, 4, 'notice', '공지사항', 0, -1, 2, 1, 0, 1, 0),
	(11, 4, 'review', '수강후기', 0, -1, 2, 1, 0, 1, 0),
	(12, 4, 'ki_story', 'KI이야기', 0, -1, 2, 1, 0, 1, 0),
	(13, 4, 'ki_reporter', 'KI기자단', 0, -1, 2, 1, 0, 1, 0),
	(14, 4, 'ki_professor', '교수칼럼', 0, -1, 2, 1, 0, 1, 0),
	(15, 4, 'blog', '네이버블로그', 0, -1, 2, 2, 0, 1, 0),
	(16, 5, 'apply', '지원하기', 0, -1, 2, 1, 0, 1, 0),
	(17, 5, 'faq', '자주묻는 질문', 0, -1, 2, 1, 0, 1, 0);
/*!40000 ALTER TABLE `board_manage` ENABLE KEYS */;

-- 테이블 데이터 kga.consultant:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `consultant` DISABLE KEYS */;
/*!40000 ALTER TABLE `consultant` ENABLE KEYS */;

-- 테이블 데이터 kga.curriculum:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `curriculum` DISABLE KEYS */;
/*!40000 ALTER TABLE `curriculum` ENABLE KEYS */;

-- 테이블 데이터 kga.employment_status:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `employment_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `employment_status` ENABLE KEYS */;

-- 테이블 데이터 kga.faq:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `faq` DISABLE KEYS */;
/*!40000 ALTER TABLE `faq` ENABLE KEYS */;

-- 테이블 데이터 kga.faq_curriculum:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `faq_curriculum` DISABLE KEYS */;
/*!40000 ALTER TABLE `faq_curriculum` ENABLE KEYS */;

-- 테이블 데이터 kga.form:~4 rows (대략적) 내보내기
/*!40000 ALTER TABLE `form` DISABLE KEYS */;
INSERT INTO `form` (`id`, `form_name`) VALUES
	(1, '게시판'),
	(2, '단일'),
	(3, '갤러리'),
	(4, '표');
/*!40000 ALTER TABLE `form` ENABLE KEYS */;

-- 테이블 데이터 kga.group:~5 rows (대략적) 내보내기
/*!40000 ALTER TABLE `group` DISABLE KEYS */;
INSERT INTO `group` (`id`, `group_name`, `board_uri`, `show_hide`) VALUES
	(1, '학교소개', 'college', 1),
	(2, '교육과정', 'curriculum', 1),
	(3, '취업정보', 'job', 1),
	(4, '커뮤니티', 'community', 1),
	(5, '상담신청', 'consulting', 1);
/*!40000 ALTER TABLE `group` ENABLE KEYS */;

-- 테이블 데이터 kga.interview:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `interview` DISABLE KEYS */;
/*!40000 ALTER TABLE `interview` ENABLE KEYS */;

-- 테이블 데이터 kga.mainvideo:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `mainvideo` DISABLE KEYS */;
/*!40000 ALTER TABLE `mainvideo` ENABLE KEYS */;

-- 테이블 데이터 kga.popup:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `popup` DISABLE KEYS */;
/*!40000 ALTER TABLE `popup` ENABLE KEYS */;

-- 테이블 데이터 kga.recuruit:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `recuruit` DISABLE KEYS */;
/*!40000 ALTER TABLE `recuruit` ENABLE KEYS */;

-- 테이블 데이터 kga.user:~4 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `user_id`, `user_pw`, `user_name`, `user_email`, `user_phone`, `user_day`, `user_grade`, `user_sex`, `user_birth`, `ad_agree`, `nickname`, `social`, `profile`) VALUES
	(1, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', NULL, '이승희', 'nara7875@naver.com', '01049477875', '2021-06-14 04:56:50', 1, NULL, NULL, NULL, '이승희', 'naver', 'basic_profile.jpg'),
	(2, 'ddd', 'lmrP3E6lOdwnVsLQ1wxbOX4GC8nGjvorBV2z7aOk/fU', 'SSS', 'dddd@naver.com', '01011111111', '2021-06-14 08:11:40', 1, 1, 111111, 1, 'DDD', 'local', 'basic_profile.jpg'),
	(3, 'AAA', 'dE1ubhgHmGKibi8NOAQrCYWqfycaNvKI1a5/2jVmdeg', 'AAA', 'AAA@NAVER.COM', '0101111111', '2021-06-14 08:12:18', 1, 1, 111111, 1, 'AAA', 'local', 'basic_profile.jpg'),
	(4, 'sss', 'EW5+AnmFodoosI7tCtrS78pMBlxgvphJpMYreZODInQ', 'sss', 'sss@naver.com', '01011111111', '2021-06-23 02:25:27', 1, 1, 111111, 1, 'sss', 'local', '1624416155696.JPG');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
