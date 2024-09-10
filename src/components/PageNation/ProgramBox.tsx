import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import RecruitTags, { RecruitState } from '../Filters/RecruitTags';
import CareerTags from '../Filters/CareerTags';
import NotifyButton from '../Buttons/NotifyButton';
import { Program } from '../../types/ProgramListType';

export interface ProgramBoxProps {
  program: Program;
}

const ProgramBox: React.FC<ProgramBoxProps> = ({ program }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const navigate = useNavigate();

  const handleNotificationClick = () => {
    alert('출시 알림 신청 완료!');
  };

  const formatDate = (date: string) => {
    const newDate = new Date(date);
    const year = newDate.getFullYear().toString().slice(2);
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const day = newDate.getDate().toString().padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  return (
    <div
      key={program.programId}
      className="relative flex flex-col justify-center rounded-lg border border-gray-300 mb-[20px] mx-[10px] w-[165px] h-[276px] p-[8px] sm:w-[275px] sm:h-[321px] sm:p-[10px] font-pretendard "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        navigate(`/program/${program.programId}`);
      }}
    >
      <>
        <div className="relative justify-center mb-[10px] w-[149px] h-[106px] sm:w-[255px] sm:h-[164px]">
          <img
            src={program.thumbnail}
            alt={program.title}
            className="w-full h-full top-0 object-cover rounded-t-[4px] rounded-b-[4px] opacity-100"
          />
        </div>
        <span className="flex inline-flex">
          {program.recruitStatus === RecruitState.ENDED && (
            <>
              <div className="absolute inset-0 bg-[#27272D47] bg-opacity-28 rounded-lg z-10"></div>
              <RecruitTags status={RecruitState.ENDED} program={program}></RecruitTags>
            </>
          )}
          {program.recruitStatus === RecruitState.RECRUITING && (
            <RecruitTags status={RecruitState.RECRUITING} program={program} />
          )}
          <CareerTags status={program.tag} />
        </span>
        <h2 className="text-[14px] sm:text-[16px] font-semibold mt-[8px] sm:mt-[12px]">{program.title}</h2>
        <p className="text-[12px] sm:text-[14px] font-normal text-Neutral-grayscale-30">{program.intro}</p>

        <div className="flex-grow"></div>

        <p className="text-[12px] h-[16px] font-medium flex items-center">
          <span className="text-gray-800 mr-[4px] sm:mr[6px] flex-shrink-0">진행일정</span>
          <span className="text-indigo-800 inline-block whitespace-nowrap">
            {formatDate(program.programStartDate)}~{formatDate(program.programEndDate)}
          </span>
        </p>
      </>
      {
        program.recruitStatus === RecruitState.ENDED && (
          <div className="absolute inset-x-0 bottom-10 sm:bottom-16 flex justify-center z-20">
            <NotifyButton onClick={handleNotificationClick} />
          </div>
        )
      }
    </div >
  );
};

export default ProgramBox;
