// import React from 'react';
// import { Star, EmptyStar } from '../../assets/svg';
// import JobStatusIndicator from './JobStatusIndicator';
// import { Review } from '../../types/ProgramDetailType'

// interface ReviewProps {
//   review: Review;
// }

// const maxStars = 5;

// const getStatus = (status: string): 'hired' | 'rejected' | 'undecided' => {
//   switch (status) {
//     case 'EMPLOYED':
//       return 'hired';
//     case 'UNEMPLOYED':
//       return 'rejected';
//     default:
//       return 'undecided';
//   }
// };

// const renderStars = (grade: number) => (
//   <>
//     {[...Array(grade)].map((_, index) => (
//       <Star
//         key={`star-${index}`}
//         className="w-[28px] h-[28px] sm:w-[33px] sm:h-[33px] mb-[16px]"
//       />
//     ))}
//     {[...Array(maxStars - grade)].map((_, index) => (
//       <EmptyStar
//         key={`empty-star-${index}`}
//         className="w-[28px] h-[28px] sm:w-[33px] sm:h-[33px] mb-[16px]"
//       />
//     ))}
//   </>
// );

// const ReviewBox: React.FC<ReviewProps> = ({ review }) => {
//   const status = getStatus(review.status);
//   return (
//     <article
//       key={review.id}
//       className="w-[289px] h-[378px] p-[20px] border border-gray-300 rounded-lg m-4 bg-white
//         sm:w-[360px] sm:h-[348px] sm:px-[40px] sm:-py[28px]">
//       <div className="flex items-center gap-[4px]">
//         {renderStars(review.grade)}
//       </div>
//       <section className="text-Neutral-grayscale-35">
//         <div className="text-[16px] sm:text-[18px] font-semibold mb-2 mt-16px gap-[4px]">{review.programName}</div>
//         <div className="text-[14px] ">{review.date}</div>
//         <div className="text-[14px] ">희망업종: {review.dreamWorkField}</div>
//         <div className="text-[14px] ">{review.major}</div>
//         <div className="flex gap-1.5 justify-start">
//           <div className="text-[16px] font-medium ">{review.userName}</div>
//           <JobStatusIndicator status={status} />
//         </div>
//         <div className="text-[16px] mt-[16px]">{review.content}</div>
//       </section>
//     </article>
//   );
// };

// export default ReviewBox;

import React from 'react';
import { Star, EmptyStar } from '../../assets/svg';
import JobStatusIndicator from './JobStatusIndicator';
import { Review } from '../../types/ProgramDetailType';

interface ReviewProps {
  review: Review;
}

const maxStars = 5;

const getStatus = (status: string): 'hired' | 'rejected' | 'undecided' => {
  switch (status) {
    case 'EMPLOYED':
      return 'hired';
    case 'UNEMPLOYED':
      return 'rejected';
    default:
      return 'undecided';
  }
};

const renderStars = (grade: number) => (
  <>
    {[...Array(grade)].map((_, index) => (
      <Star
        key={index}
        className="w-[28px] h-[28px] sm:w-[33px] sm:h-[33px] mb-[16px]"
      />
    ))}
    {[...Array(maxStars - grade)].map((_, index) => (
      <EmptyStar
        key={index}
        className="w-[28px] h-[28px] sm:w-[33px] sm:h-[33px] mb-[16px]"
      />
    ))}
  </>
);

const ReviewBox: React.FC<ReviewProps> = ({ review }) => {
  const status = getStatus(review.status);

  return (
    <article className="w-[289px] h-[378px] p-[20px] border border-gray-300 rounded-lg m-4 bg-white
      sm:w-[360px] sm:h-[348px] sm:px-[40px] sm:py-[28px]">
      <div className="flex items-center gap-1">
        {renderStars(review.grade)}
      </div>
      <section className="text-Neutral-grayscale-35 mt-[16px]">
        <div className="text-[16px] sm:text-[18px] font-semibold mb-2">{review.programName}</div>
        <div className="text-[14px]">{review.date}</div>
        <div className="text-[14px]">희망업종: {review.dreamWorkField}</div>
        <div className="text-[14px]">{review.major}</div>
        <div className="flex items-center gap-1.5 mt-2">
          <div className="text-[16px] font-medium">{review.userName}</div>
          <JobStatusIndicator status={status} />
        </div>
        <div className="text-[16px] mt-[16px]">{review.content}</div>
      </section>
    </article>
  );
};

export default ReviewBox;
