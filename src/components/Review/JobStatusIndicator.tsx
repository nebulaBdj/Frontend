import React from "react";

interface JobStatusIndicatorProps {
  status: "hired" | "rejected";
}

const JobStatusIndicator: React.FC<JobStatusIndicatorProps> = ({ status }) => {
  const statusStyles = status === "hired"
    ? "w-[41px] bg-Positive-Green-light text-Positive-Green" // 합격일 경우의 스타일
    : "w-[51px] bg-Error-light text-Error";   // 불합격일 경우의 스타일

  return (
    <div className={`flex h-[24px] text-[12px] items-center justify-center rounded-lg ${statusStyles}`}>
      {status === "hired" ? "합격" : "불합격"}
    </div>
  );
};

export default JobStatusIndicator;
