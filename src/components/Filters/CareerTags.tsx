import React from "react";
import {
  DocumentPrepare,
  CareerExplore,
  InterviewPrepare,
} from "../../assets/svg";

// 상태에 따른 스타일과 텍스트, 아이콘을 정의하는 상수
const TAG_STYLES = {
  CAREER_EXPLORE: { style: 'bg-[#e3faeb] text-[#00B347]', text: '탐색', icon: <CareerExplore /> },
  DOCUMENT_PREPARE: { style: 'bg-[#FEF8D9] text-[#E59700]', text: '서류', icon: <DocumentPrepare /> },
  INTERVIEW_PREPARE: { style: 'bg-[#FFEBEB] text-[#FF6578]', text: '면접', icon: <InterviewPrepare /> },
};

type Status = keyof typeof TAG_STYLES;

interface CareerTagProps {
  status: Status;
}

const CareerTags: React.FC<CareerTagProps> = ({ status }) => {
  const { style: tagStyles, text: statusText, icon: statusIcon } = TAG_STYLES[status] || {};
  return (
    <div
      className={`w-[55.67px] h-[24px] px-2.5 py-1 rounded-lg flex justify-center items-center gap-1 ${tagStyles} font-pretendard`}
    >
      {statusIcon && (
        <div className="flex items-center justify-center w-[11px] h-[11px]">
          {statusIcon}
        </div>
      )}{" "}
      <div className="flex items-center justify-center w-[21px] h-[16px] text-xs font-medium">
        {statusText}
      </div>
    </div>
  );
};

export default CareerTags;
