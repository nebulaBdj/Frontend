import React from 'react';
import { Star, EmptyStar } from '../../assets/svg';
import JobStatusIndicator from './JobStatusIndicator';

interface ReviewProps {
  review: {
    id: number;
    number_of_star: number;
    program_name: string;
    review_date: string;
    user_name: string;
    dream_work_field: string;
    year: number;
    major: string;
    status: string;
    contents: string;
  };
}

const ReviewBox: React.FC<ReviewProps> = ({ review }) => {
  const maxStars = 5;

  return (
    <article key={review.id} className="w-[289px] h-[378px] p-[20px] border border-gray-300 rounded-lg m-4 bg-white
        sm:w-[360px] sm:h-[348px] sm:px-[40px] sm:-py[28px]">
      <div className="flex items-center gap-[4px]">
        {/* 별점 개수만큼 Star 렌더링 */}
        {[...Array(review.number_of_star)].map((_, index) => (
          <Star key={`star-${index}`} className="w-[28px] h-[28px] sm:w-[33px] sm:h-[33px] mb-[16px]" />
        ))}
        {/* 빈 별 채우기 */}
        {[...Array(maxStars - review.number_of_star)].map((_, index) => (
          <EmptyStar key={`empty-star-${index}`} className="w-[28px] h-[28px] sm:w-[33px] sm:h-[33px] mb-[16px]" />
        ))}
      </div>
      <section className='text-Neutral-grayscale-35'>
        <div className="text-[16px] sm:text-[18px] font-semibold mb-2 mt-16px gap-[4px]">{review.program_name}</div>
        <div className="text-[14px] ">{review.review_date}</div>
        <div className="text-[14px] ">희망업종: {review.dream_work_field}</div>
        <div className="text-[14px] ">{review.major}</div>
        <div className='flex gap-1.5 justify-start'>
          <div className="text-[16px] font-medium ">{review.user_name}</div>
          <JobStatusIndicator status={review.status === "합격" ? "hired" : "rejected"} />
        </div>
        <div className="text-[16px] mt-[16px]">{review.contents}</div>
      </section>
    </article>
  );
};

export default ReviewBox;
