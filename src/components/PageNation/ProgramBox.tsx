import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import RecruitTags, { RecruitState } from '../Filters/RecruitTags';
import CareerTags from '../Filters/CareerTags';
import NotifyButton from '../Buttons/NotifyButton';
import { Program } from '../../types/ProgramListType';

export interface ProgramBoxProps {
  program: Program;
}

export default function ProgramBox({ program }: ProgramBoxProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 모바일 크기 기준
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 크기 설정

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleHover = (hovered: boolean) => setIsHovered(hovered);

  const handleNotificationClick = () => alert('출시 알림 신청 완료!');

  const renderNotifyButton = () => (
    <div
      className={`absolute inset-x-0 bottom-10 sm:bottom-16 flex justify-center z-20 transition-opacity duration-300 ${isHovered || isMobile ? 'opacity-100' : 'opacity-0'}`}
    >
      <NotifyButton onClick={handleNotificationClick} />
    </div>
  );

  const formatDate = (date: string) => {
    const newDate = new Date(date);
    return `${newDate.getFullYear().toString().slice(2)}.${(newDate.getMonth() + 1)
      .toString()
      .padStart(2, '0')}.${newDate.getDate().toString().padStart(2, '0')}`;
  };

  const renderRecruitStatus = () => {
    if (program.recruitStatus === RecruitState.ENDED) {
      return (
        <>
          <div className="absolute inset-0 bg-[#27272D47] bg-opacity-28 rounded-lg z-10" />
          <RecruitTags status={RecruitState.ENDED} program={program} />
          {renderNotifyButton()}
        </>
      );
    }
    return <RecruitTags status={RecruitState.RECRUITING} program={program} />;
  };

  return (
    <div
      key={program.programId}
      className="relative flex flex-col justify-center rounded-lg border border-gray-300 mb-[20px] mx-[10px] w-[165px] h-[276px] p-[8px] sm:w-[275px] sm:h-[355px] sm:p-[10px] font-pretendard"
      onMouseEnter={() => toggleHover(true)}
      onMouseLeave={() => toggleHover(false)}
      onClick={() => navigate(`/program/${program.programId}`)}
    >
      <div className="relative justify-center mb-[10px] w-[149px] h-[106px] sm:w-[255px] sm:h-[164px]">
        <img
          src={program.thumbnail}
          alt={program.title}
          className="w-full h-full top-0 object-cover rounded"
        />
      </div>

      {/* 테그 섹션 */}
      <span className="inline-flex">
        {renderRecruitStatus()}
        <CareerTags
          status={program.tag as 'CAREER_EXPLORE' | 'DOCUMENT_PREPARE' | 'INTERVIEW_PREPARE'}
        />
      </span>

      {/* 타이틀 */}
      <h2 className="text-[14px] sm:text-[16px] font-semibold mt-[8px] sm:mt-[12px]">
        {program.title}
      </h2>

      {/* 설명 */}
      <p className="text-[12px] sm:text-[14px] font-normal text-Neutral-grayscale-30">
        {program.intro}
      </p>

      {/* 진행일정 */}
      <div className="flex-grow" />
      <p className="text-[12px] h-[16px] font-medium flex items-center">
        <span className="text-gray-800 mr-[4px] sm:mr[6px] flex-shrink-0">진행일정</span>
        <span className="text-indigo-800 inline-block whitespace-nowrap">
          {formatDate(program.programStartDate)}~{formatDate(program.programEndDate)}
        </span>
      </p>
    </div>
  );
}
