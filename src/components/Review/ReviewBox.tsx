import React from 'react';
import { Star, EmptyStar } from '../../assets/svg';
import JobStatusIndicator from './JobStatusIndicator';

interface ReviewProps {
  review: {
    id: number;
    programName: string;
    grade: number;
    date: string;
    userName: string;
    dreamWorkField: string;
    year: number;
    major: string;
    status: string;
    title: string;
    content: string;
  };
}

const ReviewBox: React.FC<ReviewProps> = ({ review }) => {
  const maxStars = 5;

  const getStatus = (status: string) => {
    if (status === 'EMPLOYED') {
      return 'hired';
    } else if (status === 'UNEMPLOYED') {
      return 'rejected';
    } else {
      return 'undecided';
    }
  };

  return (
    <article
      key={review.id}
      className="w-[289px] h-[378px] p-[20px] border border-gray-300 rounded-lg m-4 bg-white
        sm:w-[360px] sm:h-[348px] sm:px-[40px] sm:-py[28px]"
    >
      <div className="flex items-center gap-[4px]">
        {/* 별점 개수만큼 Star 렌더링 */}
        {[...Array(review.grade)].map((_, index) => (
          <Star
            key={`star-${index}`}
            className="w-[28px] h-[28px] sm:w-[33px] sm:h-[33px] mb-[16px]"
          />
        ))}
        {/* 빈 별 채우기 */}
        {[...Array(maxStars - review.grade)].map((_, index) => (
          <EmptyStar
            key={`empty-star-${index}`}
            className="w-[28px] h-[28px] sm:w-[33px] sm:h-[33px] mb-[16px]"
          />
        ))}
      </div>
      <section className="text-Neutral-grayscale-35">
        <div className="text-[16px] sm:text-[18px] font-semibold mb-2 mt-16px gap-[4px]">
          {review.programName}
        </div>
        <div className="text-[14px] ">{review.date}</div>
        <div className="text-[14px] ">희망업종: {review.dreamWorkField}</div>
        <div className="text-[14px] ">{review.major}</div>
        <div className="flex gap-1.5 justify-start">
          <div className="text-[16px] font-medium ">{review.userName}</div>
          <JobStatusIndicator status={getStatus(review.status)} />
        </div>
        <div className="text-[16px] mt-[16px]">{review.content}</div>
      </section>
    </article>
  );
};

export default ReviewBox;
