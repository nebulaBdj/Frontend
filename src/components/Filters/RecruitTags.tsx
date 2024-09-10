import React from 'react';
import { Program } from '../../types/ProgramListType';

export enum RecruitState {
  RECRUITING = 'RECRUITING',
  ENDED = 'ENDED',
}

interface RecruitTagProps {
  status: RecruitState;
  program: Program;
}

// 상태에 따른 스타일을 반환하는 함수
const getTagStyles = (status: RecruitState) => {
  switch (status) {
    case RecruitState.RECRUITING:
      return 'bg-Primary-10 text-Primary-100';
    case RecruitState.ENDED:
      return 'bg-Neutral-grayscale-80 text-Neutral-grayscale-35';
    default:
      return '';
  }
};

// 상태에 따른 텍스트를 반환하는 함수
const getStatusText = (status: RecruitState, deadline: number) => {
  switch (status) {
    case RecruitState.RECRUITING:
      return `D-${deadline}`;
    case RecruitState.ENDED:
      return '마감';
    default:
      return '';
  }
};

const RecruitTags: React.FC<RecruitTagProps> = ({ status, program }) => {
  const tagStyles = getTagStyles(status);
  const statusText = getStatusText(status, program.deadline);

  const isRecruiting = status === RecruitState.RECRUITING;
  const width = isRecruiting ? 'w-[48px]' : 'w-[41px]';

  return (
    <div
      className={`flex justify-center items-center px-[10px] py-[4px] mr-[6px] rounded-lg gap-1 ${width} ${tagStyles}`}
    >
      <div className={`flex items-center justify-center text-xs font-medium whitespace-nowrap`}>
        {statusText}
      </div>
    </div>
  );
};

export default RecruitTags;
