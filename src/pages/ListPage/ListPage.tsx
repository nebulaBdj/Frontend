import React, { useEffect, useState } from 'react';
import CareerFilter from '../../components/Filters/CareerFilter';
import ProgramBox from '../../components/PageNation/ProgramBox';
import TypeFilter from '../../components/Filters/TypeFilter';
import { RecruitState } from '../../components/Filters/RecruitTags';
import PageNation from '../../components/PageNation/PageNation';
import { Program } from '../../types/ProgramListType';
import axios from 'axios';

const ListPage: React.FC = () => {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [currentPrograms, setCurrentPrograms] = useState<Program[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1); // 현재 페이지 상태
  const [careerFilter, setCareearFilter] = useState<string[]>(['ALL']);
  const [typeFilter, setTypeFilter] = useState<string[]>(['CHALLENGE', 'LIVECLASS']);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const careerTag = careerFilter.includes('ALL') ? 'ALL' : careerFilter.join(',');
        const typeTags = typeFilter.map((type) => `programTypes=${type}`).join('&');
        const res = await axios.get(
          `https://letmec.p-e.kr/program/list?careerTag=${careerTag}&${typeTags}&page=0`,
        );
        setPrograms(res.data.result.programDtos);
        setTotalPages(res.data.result.totalPageCount);
      } catch (error) {
        console.log('에러 발생', error);
        setPrograms([]);
        setCurrentPrograms([]);
      }
    };

    fetchPrograms();
  }, [careerFilter, typeFilter]);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const careerTag = careerFilter.includes('ALL') ? 'ALL' : careerFilter.join(',');
        const typeTags = typeFilter.map((type) => `programTypes=${type}`).join('&');
        const res = await axios.get(
          `https://letmec.p-e.kr/program/list?careerTag=${careerTag}&${typeTags}&page=${currentPage - 1}`,
        );
        console.log(res);
        setPrograms(res.data.result.programDtos);
        setTotalPages(res.data.result.totalPageCount);
      } catch (error) {
        console.log('에러 발생', error);
        setPrograms([]);
        setCurrentPrograms([]);
      }
    };

    fetchPrograms();
  }, [currentPage]);

  useEffect(() => {
    const filterAndSlicePrograms = () => {
      const filtered = programs
        .filter(
          (program) =>
            (careerFilter.includes('ALL') || careerFilter.includes(program.tag)) &&
            (typeFilter.includes('ALL') || typeFilter.includes(program.dtype)),
        )
        .sort((a, b) => {
          // 마감된 프로그램 (ENDED) 을 뒤로 보내는 정렬 조건
          if (a.recruitStatus === RecruitState.ENDED && b.recruitStatus !== RecruitState.ENDED) {
            return 1;
          } else if (
            a.recruitStatus !== RecruitState.ENDED &&
            b.recruitStatus === RecruitState.ENDED
          ) {
            return -1;
          }
          return 0; // 그 외의 경우에는 순서 변경 없이 그대로 유지
        });

      setCurrentPrograms(filtered);
    };

    filterAndSlicePrograms();
  }, [programs, careerFilter, typeFilter, currentPage]);

  // 페이지 변경 함수 (PageNation에서 사용자가 페이지 번호 누르면 호출됨)
  const getCurrentPage = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex flex-col items-center">
      <CareerFilter activeItem={careerFilter} setActiveItem={setCareearFilter} />
      <TypeFilter activeItems={typeFilter} setActiveItems={setTypeFilter} />

      <div className="flex flex-wrap justify-center items-center">
        {currentPrograms.map((program) => (
          <ProgramBox key={program.programId} program={program} />
        ))}
      </div>

      {/* PageNation 컴포넌트에 필요한 props 전달 */}
      <PageNation
        currentPage={currentPage} // 현재 페이지
        totalPages={totalPages}
        getCurrentPage={getCurrentPage} // 페이지 변경 함수
      />
    </div>
  );
};

export default ListPage;
