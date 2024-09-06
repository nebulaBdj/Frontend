import React, { useEffect, useState } from 'react';
import CareerFilter from '../../components/Filters/CareerFilter';
import ProgramBox from '../../components/PageNation/ProgramBox';
import TypeFilter from '../../components/Filters/TypeFilter';
import PageNation from '../../components/PageNation/PageNation';
import { RecruitState } from '../../components/Filters/RecruitTags';

interface Program {
  id: number;
  title: string;
  intro: string;
  dday: number;
  program_start_date: string;
  program_finish_date: string;
  imageUrl: string;
  status: RecruitState;
}

const dummyData: Program[] = [
  {
    id: 1,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 12,
    program_start_date: 'YY.MM.DD',
    program_finish_date: 'YY.MM.DD',
    imageUrl: '/svg/challange_listpage_thumbnail.svg',
    status: RecruitState.RECRUITING,
  },
  {
    id: 2,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 12,
    program_start_date: 'YY.MM.DD',
    program_finish_date: 'YY.MM.DD',
    imageUrl: '/svg/challange_listpage_thumbnail.svg',
    status: RecruitState.RECRUITING,
  },
  {
    id: 3,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 12,
    program_start_date: 'YY.MM.DD',
    program_finish_date: 'YY.MM.DD',
    imageUrl: '/svg/challange_listpage_thumbnail.svg',
    status: RecruitState.ENDED,
  },
  {
    id: 4,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 12,
    program_start_date: 'YY.MM.DD',
    program_finish_date: 'YY.MM.DD',
    imageUrl: '/svg/challange_listpage_thumbnail.svg',
    status: RecruitState.RECRUITING,
  },
  {
    id: 5,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 12,
    program_start_date: 'YY.MM.DD',
    program_finish_date: 'YY.MM.DD',
    imageUrl: '/svg/challange_listpage_thumbnail.svg',
    status: RecruitState.ENDED,
  },
  {
    id: 6,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 12,
    program_start_date: 'YY.MM.DD',
    program_finish_date: 'YY.MM.DD',
    imageUrl: '/svg/challange_listpage_thumbnail.svg',
    status: RecruitState.RECRUITING,
  },
  {
    id: 7,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 12,
    program_start_date: 'YY.MM.DD',
    program_finish_date: 'YY.MM.DD',
    imageUrl: '/svg/challange_listpage_thumbnail.svg',
    status: RecruitState.ENDED,
  },
  {
    id: 8,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 12,
    program_start_date: 'YY.MM.DD',
    program_finish_date: 'YY.MM.DD',
    imageUrl: '/svg/challange_listpage_thumbnail.svg',
    status: RecruitState.ENDED,
  },
  {
    id: 9,
    title: 'CX Manager의 모든 것과 커리어 설계',
    intro: '제너럴의 스페셜리스트, CX Manager',
    dday: 12,
    program_start_date: 'YY.MM.DD',
    program_finish_date: 'YY.MM.DD',
    imageUrl: '/svg/challange_listpage_thumbnail.svg',
    status: RecruitState.ENDED,
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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPrograms = programs.slice(indexOfFirstPost, indexOfLastPost); // 현재 페이지에 해당하는 프로그램 데이터만 보여줌

  // 페이지 변경 함수 (PageNation에서 사용자가 페이지 번호 누르면 호출됨)
  const getCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <CareerFilter activeItem={careerFilter} setActiveItem={setCareearFilter} />
      <TypeFilter activeItems={typeFilter} setActiveItems={setTypeFilter} />

      <div className="flex flex-wrap justify-center items-center">
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
