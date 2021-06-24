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

-- 테이블 데이터 kga.apply:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `apply` DISABLE KEYS */;
/*!40000 ALTER TABLE `apply` ENABLE KEYS */;

-- 테이블 데이터 kga.board:~29 rows (대략적) 내보내기
/*!40000 ALTER TABLE `board` DISABLE KEYS */;
INSERT INTO `board` (`id`, `user_id`, `board_number`, `title`, `nickname`, `nickname2`, `date`, `contents`, `hits`, `show_hide`, `file1`, `cur_num`, `file3`) VALUES
	(1, '111', 11, '뭐하지ss', '22', '22', '2021-06-14 11:26:23', '                    \r\n                    ㅁㅇㄻㄻㅇㄴㄹ\r\n             ssss       \r\n                ', 9, 0, NULL, 2, NULL),
	(2, '222', 11, '미니미', '33', '33', '2021-06-14 11:27:52', '정처기 합격', 1, 0, NULL, 2, NULL),
	(3, '222', 11, '성공했나', '33', '33', '2021-06-14 11:28:18', '성공했기를', 1, 0, NULL, 2, NULL),
	(4, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'fffftttt', '[object Undefined]', '이승희', '2021-06-14 06:38:54', '                    \r\n                ffffttttttff', 2, 0, NULL, 2, NULL),
	(5, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'aaaa', '[object Undefined]', '이승희', '2021-06-14 06:46:45', '                    \r\n       aaaaaa', 1, 0, NULL, 2, NULL),
	(6, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'dasf', '"이승희"', '이승희', '2021-06-14 06:47:24', '                    \r\n                afdasdf', 0, 0, NULL, 2, NULL),
	(7, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㄹㄹㄹㄹ', '"이승희"', '이승희', '2021-06-14 09:47:50', '                    \r\n    ㄹㄹㄹㄹㄹ            ', 7, 0, NULL, 1, NULL),
	(9, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㅎㅎㅎㅎ', '"이승희"', '이승희', '2021-06-14 10:17:00', '                    \r\n        ㅎㅎㅎㅎ        ', 0, 0, NULL, 1, NULL),
	(10, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㄴㄴㄴㄴ', '"이승희"', '이승희', '2021-06-14 10:17:04', '                    \r\n                ㄴㄴㄴㄴㄴㄴ', 0, 0, NULL, 1, NULL),
	(11, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㅎㅎㅎ', '이승희', '이승희', '2021-06-14 10:19:44', '                    \r\n               ㅎㅎㅎㅎ ', 0, 0, NULL, 1, NULL),
	(12, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㅇㅇㅇㅇ', '이승희', '이승희', '2021-06-14 10:19:48', '                    \r\n           ㅇㅇㅇㅇ     ', 0, 0, NULL, 1, NULL),
	(13, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㅎㅎㅎㅎ', '이승희', '이승희', '2021-06-14 10:19:52', '                    \r\n                ㅎㅎㅎㅎ', 0, 0, NULL, 1, NULL),
	(14, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', 11, 'ㄴㄴㄴㄴ', '이승희', '이승희', '2021-06-14 10:19:56', '                    \r\n                ㄴㄴㄴㄴㄴ', 5, 0, NULL, 1, NULL),
	(15, 'sss', 9, 'cvzvzxcvzxcv', 'sss', 'sss', '2021-06-23 09:32:01', '<p>zcvzxcvzxcv</p>', 0, 0, '1624440721785.jpeg', 0, NULL),
	(16, 'sss', 9, 'cvzvzxcvzxcv', 'sss', 'sss', '2021-06-23 09:32:11', '<p>zcvzxcvzxcv</p>', 0, 0, '1624440731033.JPG', 0, NULL),
	(17, 'sss', 9, 'cvzvzxcvzxcv', 'sss', 'sss', '2021-06-23 09:32:22', '<p>zcvzxcvzxcv</p>', 0, 0, '1624440742719.JPG', 0, NULL),
	(18, '111', 11, '111', '111', '111', '2021-06-23 22:09:02', '11111', 1, 0, NULL, 2, NULL),
	(19, '222', 11, '111', '11', '1111', '2021-06-23 22:09:42', '2222', 1, 0, NULL, 3, NULL),
	(20, '2222', 11, '2222', '222', '22', '2021-06-23 22:11:13', '22222', 0, 0, NULL, 3, NULL),
	(21, '1111', 11, '1111', '11111', '1111', '2021-06-23 22:12:05', '111', 0, 0, NULL, 3, NULL),
	(22, '4번째', 11, '뭐하지', '1111', '1111', '2021-06-23 22:12:33', '뭐하지...', 0, 0, NULL, 3, NULL),
	(23, '5번째인', 11, '말할수없겠지', '11', '11', '2021-06-23 22:13:01', 'ㄹ먄ㅇ럼ㄴㅇ;ㅣㅏㅓ;ㅣ', 0, 0, NULL, 3, NULL),
	(24, '6번째다', 11, '가라', '데이터', '데이터', '2021-06-23 22:13:24', '가라데이터 넣기 힘들어', 0, 0, NULL, 3, NULL),
	(25, '1째', 11, '이건뭐죠', '좋아요', '좋아요', '2021-06-23 22:14:01', '구독 알람설정', 0, 0, NULL, 4, NULL),
	(26, '둘째', 11, '관연 ', '마지막', '그약속에', '2021-06-23 22:22:20', '다신 울지 않을래', 0, 0, NULL, 4, NULL),
	(27, '달빛천사', 11, '재밌음', '재밌음', '재밌음', '2021-06-23 22:23:04', '풀문', 0, 0, NULL, 4, NULL),
	(28, '좋아요', 11, '풀문', '풀문', '풀문', '2021-06-23 22:23:47', '재밋나영...', 0, 0, NULL, 4, NULL),
	(29, '경일 좋아요', 11, '좋아요', '좋군', '좋군', '2021-06-23 22:24:34', '언제끝나죠', 0, 0, NULL, 4, NULL),
	(30, '이거언제', 11, '끝날까여', '아직4', '아직4', '2021-06-23 22:25:06', '아직4에요...', 0, 0, NULL, 4, NULL);
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

-- 테이블 데이터 kga.consultant:~2 rows (대략적) 내보내기
/*!40000 ALTER TABLE `consultant` DISABLE KEYS */;
INSERT INTO `consultant` (`id`, `professor_name`, `professor_info`, `picture`) VALUES
	(1, '송인규', '고려대학교/기술경영전문대학원 겸임교수/기술투자와 M&A강의/', 'professor1.png'),
	(2, '배운철', '한양대학교 겸임교수/검퓨터 공학 전공/ Media 박사과정 수료/ 기술 및 마케팅 전문가', 'professor2.png');
/*!40000 ALTER TABLE `consultant` ENABLE KEYS */;

-- 테이블 데이터 kga.curriculum:~6 rows (대략적) 내보내기
/*!40000 ALTER TABLE `curriculum` DISABLE KEYS */;
INSERT INTO `curriculum` (`id`, `cur_title`, `detail_name`, `cur_uri`, `main_image`, `character`, `syllabus`, `side_info1`, `side_info2`, `period`, `tuition`, `qualification`, `professor1`, `professor2`, `faq1`, `faq2`, `faq3`) VALUES
	(1, '블록체인', '블록체인 기반 핀테크 및 응용SW개발자 양성과정', 'blockchain', 'KGApng.png', '1. 코인을 직접 개발하여 블록체인 구조와 네트워크를 이해\r\n                ///\r\n                2. 국내 43개 혁신 교육기관 중 가장 전문적인 블록체인 커리큘럼\r\n                ///\r\n                3. 단순 개발자가 아닌 고급 개발자로 업그레이드 가능한 교육\r\n                ///\r\n                4. 기업과 협약하여 프로젝트 결과물을 현업 트렌드에 맞게 피드백\r\n                ///5. 핀테크, 금융사 취업에 유리한 결과물 제작\r\n                ///6. 솔리디티 언어를 사용한 이더리움 기반 스마트 컨트렉(Dapp)\r\n                ///7. 클레이튼 기반의 앱 개발(Bapp)\r\n               ', 'CURR.png', '4차산업혁명시대에 필요한 인재는 <br/>', '본 과정은 선발을 통해 이루어지는  훈련생 선발제 운영과정이며 훈련생에게 일체 수강료는 요구하지 않습니다./\r\n합격 후 고용센터에서 일주인간의 직업 상담을 거쳐 \'국민내일배움카드\'를 발급받게 됩니다.', 10, '13222816', ' 대학교 졸업 예정자(내년 9월 이전에 졸업 가능한 자)이상', 1, 2, 1, 5, 2),
	(2, '게임기획', ' (게임콘텐츠 제작)스타트업 게임 기획 & 프로그래밍 전문가 양성과정-2', 'gameArchitect', 'KGApng.png', '1. 네코랜드 스튜디오를 활용한 게임개발, 실제 유저들과 소통하고 피드백을 받을 수 있습니다.\r\n///\r\n2. 보드게임 제작부터 온라인게임 제작까지!/\r\n게임개발 all process를 경험하고 본인의 강점을 찾아 컨설팅 해 드립니다./\r\n///\r\n3. Unity로 라이브 서비스하여 직접 구글 스토어에 올리고 관리하는 것까지 최신 트렌드 게임을 직접 만들어보고 서비스합니다./', 'curri_archi.png', '북미 게임개발자 커리큘럼을 모티브로 현장감 있는 게임 기획자를 육성합니다./\r\n과정중 총 72가지의 프로젝트와 협업을 통해 게임회사에서 먹히는 실무 전문가로 키워드립니다./\r\n게임의 볼륨부터 각 수치 테이블 작성법까지!/\r\n현업 10년 이상의 베테랑 교수진을 통해 전수하는 게임 기획의 정수를 느껴보세요!', '본 과정은 선발을 통해 이루어지는  훈련생 선발제 운영과정이며 훈련생에게 일체 수강료는 요구하지 않습니다./\r\n합격 후 고용센터에서 일주인간의 직업 상담을 거쳐 \'국민내일배움카드\'를 발급받게 됩니다.', 5, '6000', ' 대학교 졸업 예정자(내년 9월 이전에 졸업 가능한 자)이상', 1, 2, 4, 1, 5),
	(3, '게임프로그래머', '게임 프로그래머 양성과정 -2', 'programing', 'KGApng.png', '1. 총 30여가지가 넘는 게임을 만들며 구현력을 기릅니다.///\r\n2. Win API를 통해 직접 게임을 손코딩하고 프로그래밍 원리를 이해합니다.///\r\n3. Unity로 라이브 서비스하여 직접 구글 스토어에 올리고 관리하는 것까지 최신 트렌드 게임을 직접 만들어보고 서비스합니다.', 'curri_archi.png', '네덜란드 게임 개발자 커리큘럼을 연구하여 게임을 직접 라이브 서비스하고 구현할 수 있는 능력을 만듭니다./\r\n경일게임아카데미에서는 Unity로부터 공인하는 공식 파트너 교육센터입니다. 체계적인 유니티 전문 개발자 과정 지금 바로 신청하세요!', '본 과정은 선발을 통해 이루어지는  훈련생 선발제 운영과정이며 훈련생에게 일체 수강료는 요구하지 않습니다./', 5.3, '1000', ' 대학교 졸업 예정자(내년 9월 이전에 졸업 가능한 자)이상', 1, 2, 3, 5, 1),
	(4, 'VR/AR', ' (증강현실) 가상 증강현실 응용 SW개발자 양성과정', 'vrar', 'KGApng.png', '1. 기업이 원하는 인재수요에 맞추어 바로 일할 수 있는 유능한 인재를 만드는 실전 커리큘럼입니다.///\r\n2. 트레드밀과 VR기어 등 직접 구동 할 수 있는 환경에서 내가 만든 프로그램이나 어플환경에서 구동해 보고 체험해보는 체험 집중형 교육입니다.///\r\n3. 고용노동부와 한국 직업능력심사평가원에서 5년 연속 우수훈련기관의 검증된 교육과정입니다.', 'vrar_curriculum.png', '본 과정은 4차 산업혁명시대에 새로운 패러다임을 제시하는 가상 증강현실 어플리케이션 개발에 필요한 다양한 실무지식을 습듯하는 취업가속형 부트캠프입니다. 고용노동부와 한국직업능력평가원에서 인증하는 우수훈련기관의 검증된 과정, 지금 바로 참여하세요.', '본 과정은 선발을 통해 이루어지는  훈련생 선발제 운영과정이며 훈련생에게 일체 수강료는 요구하지 않습니다./', 5, '3000', ' 대학교 졸업 예정자(내년 9월 이전에 졸업 가능한 자)이상', 1, 2, 2, 3, 1),
	(5, '게임원화', '게임원화 잘하게끔함', 'gamedrawing', 'KGApng.png', '1.아이패드 증정/2.타블렛 증정/3.맥증정', 'CURR.png', '어쩌구저쩌구', '본 과정은 선발을 통해 이루어지는  훈련생 선발제 운영과정이며 훈련생에게 일체 수강료는 요구하지 않습니다./', 5, '100000', ' 대학교 졸업 예정자(내년 9월 이전에 졸업 가능한 자)이상', 1, 2, 1, 2, 3),
	(6, '프로게이머 코칭', '프로게이머데뷔 class', 'progamerCoaching', 'KGApng.png', '1.프로게이머 데뷔시킴 확실', 'CURR.png', '저쩌구어쩌구', '본 과정은 선발을 통해 이루어지는  훈련생 선발제 운영과정이며 훈련생에게 일체 수강료는 요구하지 않습니다./', 12, NULL, ' 대학교 졸업 예정자(내년 9월 이전에 졸업 가능한 자)이상', 1, 2, 4, 2, 1);
/*!40000 ALTER TABLE `curriculum` ENABLE KEYS */;

-- 테이블 데이터 kga.cur_cardinal:~6 rows (대략적) 내보내기
/*!40000 ALTER TABLE `cur_cardinal` DISABLE KEYS */;
INSERT INTO `cur_cardinal` (`id`, `curr_id`, `start_date`, `end_date`, `location`, `limit_people`) VALUES
	(1, 1, '2021-03-21', '2022-12-23', '서울특별시 강동구 올림픽로 651 예경빌딩 5층 K-DIGITAL 8강의장', 30),
	(2, 2, '2021-06-23', '2021-09-23', '서울특별시 강동구 천호대로 995,금복빌딩 3,4층', 30),
	(3, 3, '2021-06-23', '2021-11-23', '서울특별시 강동구 천호대로 995,금복빌딩 3,4층', 30),
	(4, 4, '2021-06-15', '2021-11-23', '서울특별시 강동구 천호대로 995,금복빌딩 4층', 30),
	(5, 5, '2021-06-23', '2021-12-23', '서울특별시 강동구 천호대로 995,금복빌딩 3,4층', 30),
	(6, 6, '2021-06-23', '2021-11-23', '서울특별시 강동구 천호대로 995,금복빌딩 3,4층', 30);
/*!40000 ALTER TABLE `cur_cardinal` ENABLE KEYS */;

-- 테이블 데이터 kga.faq:~5 rows (대략적) 내보내기
/*!40000 ALTER TABLE `faq` DISABLE KEYS */;
INSERT INTO `faq` (`id`, `question`, `answer`) VALUES
	(1, '초보자도 배울 수 있는 과정인가요?', '본과정은 사전역량이 없더라도 기초부터 배울 수 있는 과정으로 설계되었습니다. '),
	(2, '참여 조건은 어떻게 되나요?', '고등학교 졸업 이상, 취업준비생이면 누구나 참여가능합니다.'),
	(3, '취업지원은 어떻게 이루어지나요?', '게임회사 취업에 있어 가장 중요한 것은 구현력과 결과물입니다. 우선 취업지원 없이도 '),
	(4, ' K-DIGITAL은 기존 교육 사업과 무엇이 다른가요?', '첫째, 서울대, 네이버 커넥트 등 청년들이 가고싶어하는 43개 혁신 교육기관,'),
	(5, '사전지식이 없어도 참여 가능한가요?', '본 과정은 비전공 청년에게도 디지털 일자리의 길을 열어주기 위하여');
/*!40000 ALTER TABLE `faq` ENABLE KEYS */;

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

-- 테이블 데이터 kga.mainvideo:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `mainvideo` DISABLE KEYS */;
/*!40000 ALTER TABLE `mainvideo` ENABLE KEYS */;

-- 테이블 데이터 kga.popup:~0 rows (대략적) 내보내기
/*!40000 ALTER TABLE `popup` DISABLE KEYS */;
/*!40000 ALTER TABLE `popup` ENABLE KEYS */;

-- 테이블 데이터 kga.recuruit:~7 rows (대략적) 내보내기
/*!40000 ALTER TABLE `recuruit` DISABLE KEYS */;
INSERT INTO `recuruit` (`id`, `job_date`, `major`, `cardinal`, `name`, `company`) VALUES
	(1, '2021-05-27', '게임 프로그래밍', 25, '하주호', '메드엔진'),
	(2, '2021-06-23', '게임프로그래밍', 25, '송명훈', '만렙게임즈'),
	(3, '2021-06-23', '게임 프로그램이', 25, '박소영', '넵튠'),
	(4, '2021-06-23', '게임기획', 25, '윤지상', '잔디소프트'),
	(5, '2021-06-23', '게임 프로그래밍', 25, '김명준', '아키핀'),
	(6, '2021-06-23', '게임 기획', 26, '정수경', '스페이스다이브게임즈'),
	(7, '2021-06-23', '게임 기획', 24, '임재성', '올엠');
/*!40000 ALTER TABLE `recuruit` ENABLE KEYS */;

-- 테이블 데이터 kga.user:~4 rows (대략적) 내보내기
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` (`id`, `user_id`, `user_pw`, `user_name`, `user_email`, `user_phone`, `user_day`, `user_grade`, `user_sex`, `user_birth`, `ad_agree`, `nickname`, `social`, `profile`, `curr_id`) VALUES
	(1, 'jYkPXB0o8NJUVo9HBpOkiY5y-g4i-ipOy2WBdChc0kM', NULL, '이승희', 'nara7875@naver.com', '01049477875', '2021-06-14 04:56:50', 1, NULL, NULL, NULL, '이승희', 'naver', 'basic_profile.jpg', NULL),
	(2, 'ddd', 'lmrP3E6lOdwnVsLQ1wxbOX4GC8nGjvorBV2z7aOk/fU', 'SSS', 'dddd@naver.com', '01011111111', '2021-06-14 08:11:40', 1, 1, 111111, 1, 'DDD', 'local', 'basic_profile.jpg', NULL),
	(3, 'AAA', 'dE1ubhgHmGKibi8NOAQrCYWqfycaNvKI1a5/2jVmdeg', 'AAA', 'AAA@NAVER.COM', '0101111111', '2021-06-14 08:12:18', 1, 1, 111111, 1, 'AAA', 'local', 'basic_profile.jpg', NULL),
	(4, 'sss', 'EW5+AnmFodoosI7tCtrS78pMBlxgvphJpMYreZODInQ', 'sss', 'sss@naver.com', '01011111111', '2021-06-23 02:25:27', 4, 1, 111111, 1, 'sss', 'local', '1624416155696.JPG', NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
