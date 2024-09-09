import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import RecruitTags, { RecruitState } from '../Filters/RecruitTags';
import CareerTags from '../Filters/CareerTags';
import NotifyButton from '../Buttons/NotifyButton';
import { Program } from '../../types/ProgramListType';

interface ProgramBoxProps {
  program: Program;
}

const ProgramBox: React.FC<ProgramBoxProps> = ({ program }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const navigate = useNavigate();

  const handleNotificationClick = () => {
    // 여기에 알림 신청 로직 추가
    alert('출시 알림 신청 완료!');
  };

  const formatDate = (date: string) => {
    return new Date(date).toISOString().split('T')[0];
  };

  return (
    <div
      key={program.programId}
      className="relative flex flex-col justify-center rounded-lg border border-gray-300 mb-[20px] mx-[10px] w-[165px] h-[306px] p-[8px] sm:w-[275px] sm:h-[321px] sm:p-[10px] font-pretendard"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => {
        navigate(`/program/${program.programId}`);
      }}
    >
      {program.recruitStatus === RecruitState.ENDED && (
        <div className="absolute inset-0 bg-[#27272D47] bg-opacity-28 rounded-lg z-10"></div>
      )}
      <div className="flex justify-center pb-[10px] w-[149px] h-[106px] sm:w-[255px] sm:h-[164px]">
        <img
          src={program.thumbnail}
          alt={program.title}
          className="w-full h-full object-cover rounded-t-[4px] rounded-b-[4px] opacity-100"
        />
      </div>
      <span className="flex inline-flex">
        <RecruitTags status={program.recruitStatus} />
        <CareerTags status={program.tag} />
      </span>
      <h2 className="text-[14px] font-semibold mb-2">{program.title}</h2>
      <p className="text-[12px] font-normal text-gray-600">{program.intro}</p>
      <p className="text-[12px] pt-[8px] font-medium text-pr-100">
        <span className="text-gray-800">모집 마감 </span> D-{program.deadline}
      </p>
      <p className="text-[12px] font-medium text-pr-100">
        <span className="text-gray-800">진행 일정</span> {formatDate(program.programStartDate)} -{' '}
        {formatDate(program.programEndDate)}
      </p>
      {program.recruitStatus === RecruitState.ENDED && isHovered && (
        <div className="absolute b-[8px] inset-0 flex items-center justify-center z-20">
          <NotifyButton onClick={handleNotificationClick} />
        </div>
      )}
    </div>
  );
};

export default ProgramBox;
