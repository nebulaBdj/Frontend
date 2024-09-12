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

// 상태에 따른 스타일과 텍스트를 반환하는 객체
const TAG_PROPERTIES = {
  [RecruitState.RECRUITING]: {
    styles: 'bg-Primary-10 text-Primary-100',
    getStatusText: (deadline: number) => `D-${deadline}`,
    width: 'w-[48px]',
  },
  [RecruitState.ENDED]: {
    styles: 'bg-Neutral-grayscale-80 text-Neutral-grayscale-35',
    getStatusText: () => '마감',
    width: 'w-[41px]',
  },
};

// 상태에 따른 태그 스타일과 텍스트를 반환하는 함수
const getTagProperties = (status: RecruitState, deadline: number) => {
  const { styles, getStatusText, width } = TAG_PROPERTIES[status] || TAG_PROPERTIES[RecruitState.ENDED];
  return {
    tagStyles: styles,
    statusText: getStatusText(deadline),
    width,
  };
};

const RecruitTags: React.FC<RecruitTagProps> = ({ status, program }) => {
  const finalStatus = program.deadline < 0 ? RecruitState.ENDED : status;
  const { tagStyles, statusText, width } = getTagProperties(finalStatus, program.deadline);

  return (
    <div
      className={`flex justify-center items-center px-[10px] py-[4px] mr-[6px] rounded-lg gap-1 ${width} ${tagStyles}`}
    >
      <div className="flex items-center justify-center text-xs font-medium whitespace-nowrap">
        {statusText}
      </div>
    </div>
  );
};

export default RecruitTags;
