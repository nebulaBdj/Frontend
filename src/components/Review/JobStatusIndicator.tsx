import React from 'react';

interface JobStatusIndicatorProps {
  status: 'hired' | 'rejected' | 'undecided';
}

const JobStatusIndicator: React.FC<JobStatusIndicatorProps> = ({ status }) => {
  const statusStyles =
    status === 'hired'
      ? 'w-[41px] bg-Positive-Green-light text-Positive-Green' // 합격일 경우의 스타일
      : status === 'rejected'
        ? 'w-[51px] bg-Error-light text-Error' // 불합격일 경우의 스타일
        : 'w-[41px] bg-Warning-light text-Warning'; // 미정일 경우의 스타일
  const statusText = status === 'hired' ? '합격' : status === 'rejected' ? '불합격' : '미정';
  return (
    <div
      className={`flex h-[24px] text-[12px] items-center justify-center rounded-lg ${statusStyles}`}
    >
      {statusText}
    </div>
  );
};

export default JobStatusIndicator;
