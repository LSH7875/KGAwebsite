use kga;


INSERT INTO `group` (`id`, `group_name`, `board_uri`,`show_hide`) VALUES
	(1, '학교소개', 'college',1),
	(2, '교육과정', 'curriculum',1),
	(3, '취업정보', 'job',1),
	(4, '커뮤니티', 'community',1),
	(5, '상담신청', 'consulting',1);


INSERT INTO `board_manage` (`id`, `group`, `board_uri`, `board_title`, `preview`, `read_authority`, `write_authority`, `form`, `file`, `show_hide`) VALUES
	(1, 1, 'introduction', '학원소개', 0, -1, 3, 2, 0, 'block'),
	(2, 1, 'history', '연혁', 0, -1, 3, 2, 0, 'block'),
	(3, 1, 'teachers', '교직원소개', 0, -1, 3, 2, 0, 'block'),
	(4, 1, 'interior', '시설소개', 0, -1, 3, 2, 0, 'block'),
	(5, 1, 'location', '오시는길', 0, -1, 3, 2, 0, 'block'),
	(6, 2, 'curriculum', '커리큘럼', 0, -1, 3, 2, 0, 'block'),
	(7, 3, 'interview', '취업자인터뷰', 0, -1, 3, 1, 0, 'block'),
	(8, 3, 'recruit', '취업현황', 0, -1, 3, 4, 0, 'block'),
	(9, 3, 'portpolio', '포트폴리오', 0, -1, 3, 3, 0, 'block'),
	(10, 4, 'notice', '공지사항', 0, -1, 2, 1, 0, 'block'),
	(11, 4, 'review', '수강후기', 0, -1, 2, 1, 0, 'block'),
	(12, 4, 'ki_story', 'KI이야기', 0, -1, 2, 1, 0, 'block'),
	(13, 4, 'ki_reporter', 'KI기자단', 0, -1, 2, 1, 0, 'block'),
	(14, 4, 'ki_professor', '교수칼럼', 0, -1, 2, 1, 0, 'block'),
	(15, 4, 'blog', '네이버블로그', 0, -1, 2, 2, 0, 'block'),
	(16, 5, 'apply', '지원하기', 0, -1, 2, 1, 0, 'block'),
	(17, 5, 'faq', '자주묻는 질문', 0, -1, 2, 1, 0, 'block');

INSERT INTO `board` (`id`, `user_id`, `board_number`, `title`, `nickname`, `nickname2`, `date`, `contents`, `main_image`, `hits`, `show_hide`, `file1`, `file2`, `file3`) VALUES
	(1, '111', 11, '뭐하지ss', '22', '22', '2021-06-14 11:26:23', '                    \r\n                    ㅁㅇㄻㄻㅇㄴㄹ\r\n             ssss       \r\n                ', NULL, 9, 'block', NULL, NULL, NULL),
	(2, '222', 11, '미니미', '33', '33', '2021-06-14 11:27:52', '정처기 합격', NULL, 1, 'block', NULL, NULL, NULL),
	(3, '222', 11, '성공했나', '33', '33', '2021-06-14 11:28:18', '성공했기를', NULL, 1, 'block', NULL, NULL, NULL),
	(4, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'fffftttt', '[object Undefined]', '이승희', '2021-06-14 06:38:54', '                    \r\n                ffffttttttff', NULL, 2, 'block', NULL, NULL, NULL),
	(5, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'aaaa', '[object Undefined]', '이승희', '2021-06-14 06:46:45', '                    \r\n       aaaaaa', NULL, 1, 'block', NULL, NULL, NULL),
	(6, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'dasf', '"이승희"', '이승희', '2021-06-14 06:47:24', '                    \r\n                afdasdf', NULL, 0, 'block', NULL, NULL, NULL),
	(7, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㄹㄹㄹㄹ', '"이승희"', '이승희', '2021-06-14 09:47:50', '                    \r\n    ㄹㄹㄹㄹㄹ            ', NULL, 7, 'block', NULL, NULL, NULL),
	(9, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㅎㅎㅎㅎ', '"이승희"', '이승희', '2021-06-14 10:17:00', '                    \r\n        ㅎㅎㅎㅎ        ', NULL, 0, 'block', NULL, NULL, NULL),
	(10, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㄴㄴㄴㄴ', '"이승희"', '이승희', '2021-06-14 10:17:04', '                    \r\n                ㄴㄴㄴㄴㄴㄴ', NULL, 0, 'block', NULL, NULL, NULL),
	(11, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㅎㅎㅎ', '이승희', '이승희', '2021-06-14 10:19:44', '                    \r\n               ㅎㅎㅎㅎ ', NULL, 0, 'block', NULL, NULL, NULL),
	(12, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㅇㅇㅇㅇ', '이승희', '이승희', '2021-06-14 10:19:48', '                    \r\n           ㅇㅇㅇㅇ     ', NULL, 0, 'block', NULL, NULL, NULL),
	(13, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㅎㅎㅎㅎ', '이승희', '이승희', '2021-06-14 10:19:52', '                    \r\n                ㅎㅎㅎㅎ', NULL, 0, 'block', NULL, NULL, NULL),
	(14, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㄴㄴㄴㄴ', '이승희', '이승희', '2021-06-14 10:19:56', '                    \r\n                ㄴㄴㄴㄴㄴ', NULL, 5, 'block', NULL, NULL, NULL);


INSERT INTO `form` (`id`, `form_name`) VALUES
	(1, '게시판'),
	(2, '단일'),
	(3, '갤러리'),
	(4, '표');


INSERT INTO `user` (`id`, `user_id`, `user_pw`, `user_name`, `user_email`, `user_phone`, `user_day`, `user_grade`, `user_sex`, `user_birth`, `ad_agree`, `nickname`, `social`) VALUES
	(1, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', NULL, '이승희', 'nara7875@naver.com', '01049477875', '2021-06-14 04:56:50', 1, NULL, NULL, NULL, '이승희', 'naver'),
	(2, 'ddd', 'lmrP3E6lOdwnVsLQ1wxbOX4GC8nGjvorBV2z7aOk/fU', 'SSS', 'dddd@naver.com', '01011111111', '2021-06-14 08:11:40', 1, 1, 111111, 1, 'DDD', 'local'),
	(3, 'AAA', 'dE1ubhgHmGKibi8NOAQrCYWqfycaNvKI1a5/2jVmdeg', 'AAA', 'AAA@NAVER.COM', '0101111111', '2021-06-14 08:12:18', 1, 1, 111111, 1, 'AAA', 'local'),
	(4, 'wlgus2134', 'wlgus', 'AAA', 'AAA@NAVER.COM', '0101111111', '2021-06-14 08:12:18', 1, 1, 111111, 1, 'AAA', 'local');
