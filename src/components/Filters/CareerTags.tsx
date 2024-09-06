import React from "react";
import {
  DocumentPrepare,
  CareerExplore,
  InterviewPrepare,
} from "../../assets/svg";
// 백엔드 변수랑 이름 맞추기!!

// 상태에 따른 스타일을 반환하는 함수
const getTagStyles = (status: string) => {
  switch (status) {
    case "career-explore":
      return "bg-[#e3faeb] text-[#00B347]";
    case "document-prepare":
      return "bg-[#FEF8D9] text-[#E59700]";
    case "interview-prepare":
      return "bg-[#FFEBEB] text-[#FF6578]";
    default:
      return "";
  }
};

// 상태에 따른 텍스트를 반환하는 함수
const getStatusText = (status: string) => {
  switch (status) {
    case "career-explore":
      return "탐색";
    case "document-prepare":
      return "서류";
    case "interview-prepare":
      return "면접";
    default:
      return "";
  }
};

// 상태에 따른 SVG 아이콘을 반환하는 함수
const getStatusIcon = (status: string) => {
  switch (status) {
    case "career-explore":
      return <CareerExplore />;
    case "document-prepare":
      return <DocumentPrepare />;
    case "interview-prepare":
      return <InterviewPrepare />;
    default:
      return null;
  }
};

interface CareerTagProps {
  status: "career-explore" | "document-prepare" | "interview-prepare";
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
      {/* 아이콘 렌더링 */}
      <div className="flex items-center justify-center w-[21px] h-[16px] text-xs font-medium">
        {statusText}
      </div>
    </div>
  );
};

export default CareerTags;
