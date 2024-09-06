import React from "react";
import {
  DocumentPrepare,
  CareerExplore,
  InterviewPrepare,
} from "../../assets/svg";

// 상태에 따른 스타일을 반환하는 함수
const getTagStyles = (status: string) => {
  switch (status) {
    case "CAREER_EXPLORE":
      return "bg-[#e3faeb] text-[#00B347]";
    case "DOCUMENT_PREPARE":
      return "bg-[#FEF8D9] text-[#E59700]";
    case "INTERVIEW_PREPARE":
      return "bg-[#FFEBEB] text-[#FF6578]";
    default:
      return "";
  }
};

// 상태에 따른 텍스트를 반환하는 함수
const getStatusText = (status: string) => {
  switch (status) {
    case "CAREER_EXPLORE":
      return "탐색";
    case "DOCUMENT_PREPARE":
      return "서류";
    case "INTERVIEW_PREPARE":
      return "면접";
    default:
      return "";
  }
};

// 상태에 따른 SVG 아이콘을 반환하는 함수
const getStatusIcon = (status: string) => {
  switch (status) {
    case "CAREER_EXPLORE":
      return <CareerExplore />;
    case "DOCUMENT_PREPARE":
      return <DocumentPrepare />;
    case "INTERVIEW_PREPARE":
      return <InterviewPrepare />;
    default:
      return null;
  }
};

interface CareerTagProps {
  status: string;
}

const CareerTags: React.FC<CareerTagProps> = ({ status }) => {
  const tagStyles = getTagStyles(status);
  const statusText = getStatusText(status);
  const statusIcon = getStatusIcon(status);

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
