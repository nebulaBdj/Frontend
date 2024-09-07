import React, { useEffect, useState } from 'react';
import CareerFilter from '../../components/Filters/CareerFilter';
import ProgramBox from '../../components/PageNation/ProgramBox';
import TypeFilter from '../../components/Filters/TypeFilter';
import { RecruitState } from '../../components/Filters/RecruitTags';
import PageNation from '../../components/PageNation/PageNation';
import { Program } from '../../types/Program';

const dummyData: Program[] = [
  {
    id: 1,
    title: '자소서 완성 2주 패키지 [재오픈]',
    intro: '하루 30분, 합격하는 서류 완성 2주 패키지 ',
    dday: 7,
    program_start_date: '24.09.14',
    program_finish_date: '24.09.27',
    imageUrl: '/svg/challange_listpage_thumbnail.svg',
    status: RecruitState.RECRUITING,
    career_type: 'DOCUMENT_PREPARE',
    program_type: 'CHALLENGE',
  },
  {
    id: 2,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 3,
    program_start_date: '24.09.10',
    program_finish_date: '24.09.10',
    imageUrl: '/img/cxmanager.png',
    status: RecruitState.RECRUITING,
    career_type: 'CAREER_EXPLORE',
    program_type: 'LIVECLASS',
  },
  {
    id: 3,
    title: '대기업 공채 준비 A to Z',
    intro: '삼성 현직자가 들려주는 하반기 합격 비결',
    dday: 12,
    program_start_date: '24.09.19',
    program_finish_date: '24.09.19',
    imageUrl: '/img/sam.png',
    status: RecruitState.RECRUITING,
    career_type: 'DOCUMENT_PREPARE',
    program_type: 'LIVECLASS',
  },
  {
    id: 4,
    title: '프론트엔드 면접의 정석',
    intro: '합격을 부르는 기술 면접의 새로운 혁신',
    dday: 0,
    program_start_date: '24.09.04',
    program_finish_date: '24.09.04',
    imageUrl: '/img/frontEnd.png',
    status: RecruitState.ENDED,
    career_type: 'INTERVIEW_PREPARE',
    program_type: 'LIVECLASS',
  },
  {
    id: 5,
    title: '면접왕 큐형의 빈틈없는\n면접 준비 방법',
    intro: '합격률 20%의 기적, 5시간\n안에 가르쳐드립니다.',
    dday: 5,
    program_start_date: '24.09.13',
    program_finish_date: '24.09.13',
    imageUrl: '/img/interview_kin.png',
    status: RecruitState.RECRUITING,
    career_type: 'INTERVIEW_PREPARE',
    program_type: 'LIVECLASS',
  },
  {
    id: 6,
    title: '배민 PM이 재정의한\nPM 취업 준비',
    intro: '배민 PM에게 배우는 PM 취업 준비 A to Z',
    dday: 0,
    program_start_date: '24.08.23',
    program_finish_date: '24.08.23',
    imageUrl: '/img/bamin.png',
    status: RecruitState.ENDED,
    career_type: 'DOCUMENT_PREPARE',
    program_type: 'LIVECLASS',
  },
  {
    id: 7,
    title: '무신사 백엔드 개발자의\n커리어패스',
    intro: '연봉 5천의 백엔드 개발자에게 듣는 커리어 이야기',
    dday: 17,
    program_start_date: '24.09.24',
    program_finish_date: '24.09.24',
    imageUrl: '/img/back.png',
    status: RecruitState.RECRUITING,
    career_type: 'CAREER_EXPLORE',
    program_type: 'LIVECLASS',
  },
  {
    id: 8,
    title: '네카라쿠배 서비스 기획,\n운영 인턴 취업의 모든 것',
    intro: '카카오 인턴과 함께 나누는\n합격 비결',
    dday: 0,
    program_start_date: '24.08.23',
    program_finish_date: '24.09.06',
    imageUrl: '/img/intern.png',
    status: RecruitState.ENDED,
    career_type: 'DOCUMENT_PREPARE',
    program_type: 'CHALLENGE',
  },
  {
    id: 9,
    title: '자소서 완성 2주 패키지',
    intro: '하루 30분, 합격하는 서류 완성 2주 패키지 ',
    dday: 0,
    program_start_date: '24.06.10',
    program_finish_date: '24.06.24',
    imageUrl: '/svg/challange_listpage_thumbnail.svg',
    status: RecruitState.ENDED,
    career_type: 'DOCUMENT_PREPARE',
    program_type: 'CHALLENGE',
  },
  {
    id: 10,
    title: '제약/바이오 대기업\n신입사원의 한마디',
    intro: '삼성 바이오로직스 직원의 커리어 꿀팁',
    dday: 0,
    program_start_date: '23.12.01',
    program_finish_date: '23.12.01',
    imageUrl: '/img/bio.png',
    status: RecruitState.ENDED,
    career_type: 'CAREER_EXPLORE',
    program_type: 'LIVECLASS',
  },
  {
    id: 11,
    title: '포트폴리오 완성 2주 패키지 2기',
    intro: '하루 30분, 합격하는 서류 완성 2주 패키지',
    dday: 10,
    program_start_date: '24.09.17',
    program_finish_date: '24.10.01',
    imageUrl: '/img/ptpol.png',
    status: RecruitState.RECRUITING,
    career_type: 'DOCUMENT_PREPARE',
    program_type: 'CHALLENGE',
  },
  {
    id: 12,
    title: '포트폴리오 완성 2주 패키지',
    intro: '하루 30분, 합격하는 서류 완성 2주 패키지',
    dday: 0,
    program_start_date: '23.09.02',
    program_finish_date: '23.09.16',
    imageUrl: '/img/ptpol.png',
    status: RecruitState.ENDED,
    career_type: 'DOCUMENT_PREPARE',
    program_type: 'CHALLENGE',
  },
];

const ListPage: React.FC = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 상태
  const [postsPerPage] = useState<number>(8); // 한 페이지에 보여줄 아이템 수 설정
  const [careerFilter, setCareearFilter] = useState<string[]>(['ALL']);
  const [typeFilter, setTypeFilter] = useState<string[]>(['CHALLENGE', 'LIVECLASS']);

  useEffect(() => {
    setPrograms(dummyData);
  }, []);

  const filteredPrograms = programs
    .filter(
      (program) =>
        (careerFilter.includes('ALL') || careerFilter.includes(program.career_type)) &&
        (typeFilter.includes('ALL') || typeFilter.includes(program.program_type)),
    )
    .sort((a, b) => {
      // 마감된 프로그램 (ENDED) 을 뒤로 보내는 정렬 조건
      if (a.status === RecruitState.ENDED && b.status !== RecruitState.ENDED) {
        return 1;
      } else if (a.status !== RecruitState.ENDED && b.status === RecruitState.ENDED) {
        return -1;
      }
      return 0; // 그 외의 경우에는 순서 변경 없이 그대로 유지
    });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPrograms = filteredPrograms.slice(indexOfFirstPost, indexOfLastPost); // 현재 페이지에 해당하는 프로그램 데이터만 보여줌

  // 페이지 변경 함수 (PageNation에서 사용자가 페이지 번호 누르면 호출됨)
  const getCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col items-center">
      <CareerFilter activeItem={careerFilter} setActiveItem={setCareearFilter} />
      <TypeFilter activeItems={typeFilter} setActiveItems={setTypeFilter} />

      <div className="flex flex-wrap justify-center items-center whitespace-pre-line">
        {currentPrograms.map((program) => (
          <ProgramBox key={program.id} program={program} />
        ))}
      </div>

      {/* PageNation 컴포넌트에 필요한 props 전달 */}
      <PageNation
        postsPerPage={postsPerPage} // 한 페이지당 보여줄 프로그램 개수
        totalPosts={programs.length} // 전체 프로그램 개수
        currentPage={currentPage} // 현재 페이지
        getCurrentPage={getCurrentPage} // 페이지 변경 함수
      />
    </div>
  );
};

export default ListPage;
