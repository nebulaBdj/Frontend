import React, { useEffect, useState } from 'react';
import CareerFilter from '../../components/Filters/CareerFilter';
import ProgramBox from '../../components/PageNation/ProgramBox';
import TypeFilter from '../../components/Filters/TypeFilter';
import { RecruitState } from '../../components/Filters/RecruitTags';
import PageNation from '../../components/PageNation/PageNation';
import { Program } from '../../types/ProgramListType';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const ListPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const initialPage = parseInt(queryParams.get('page') || '1', 10);
  const initialCareerFilter = queryParams.get('career')?.split(',') || ['ALL'];
  const initialTypeFilter = queryParams.get('type')?.split(',') || ['CHALLENGE', 'LIVECLASS'];

  const [programs, setPrograms] = useState<Program[]>([]);
  const [currentPrograms, setCurrentPrograms] = useState<Program[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [careerFilter, setCareerFilter] = useState<string[]>(initialCareerFilter);
  const [typeFilter, setTypeFilter] = useState<string[]>(initialTypeFilter);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const careerTag = careerFilter.includes('ALL') ? 'ALL' : careerFilter.join(',');
        const typeTags = typeFilter.map((type) => `programTypes=${type}`).join('&');
        if (typeTags.length === 0) { // 타입 필터 미선택 시 아무것도 띄우지 않음
          setTotalPages(0);
        }
        const res = await axios.get(
          `https://letmec.p-e.kr/program/list?careerTag=${careerTag}&${typeTags}&page=0`,
        );
        setPrograms(res.data.result.programDtos);
        typeTags.length !== 0 && setTotalPages(res.data.result.totalPageCount);
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

  // 페이지와 필터를 URL 쿼리 파라미터에 저장
  useEffect(() => {
    const careerQuery = careerFilter.join(',');
    const typeQuery = typeFilter.join(',');
    navigate(`?page=${currentPage}&career=${careerQuery}&type=${typeQuery}`);
  }, [currentPage, careerFilter, typeFilter, navigate]);

  // 페이지 변경 함수 (PageNation에서 사용자가 페이지 번호 누르면 호출됨)
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        <CareerFilter activeItem={careerFilter} setActiveItem={setCareerFilter} />
        <TypeFilter activeItems={typeFilter} setActiveItems={setTypeFilter} />
      </div>

      <div className="w-full sm:w-[1200px]">
        <div className="grid grid-cols-2 lg:grid-cols-4 w-[370px] sm:w-full mx-auto">
          {currentPrograms.map((program) => (
            <ProgramBox key={program.programId} program={program} />
          ))}
        </div>
      </div>

      {/* PageNation 컴포넌트에 필요한 props 전달 */}
      <PageNation
        currentPage={currentPage} // 현재 페이지
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

export default ListPage;
