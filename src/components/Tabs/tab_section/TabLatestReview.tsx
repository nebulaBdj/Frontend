import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Review } from '../../../types/ProgramDetailType';
import { EmptyStar, Star } from '../../../assets/svg';
import JobStatusIndicator from '../../Review/JobStatusIndicator';

interface Props {
  reviews: Review[];
}

export default function TabLatestReview({ reviews }: Props) {
  const { programId } = useParams<{ programId: string }>();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className="w-full mx-auto">
      <div className="overflow-hidden w-full">
        <div className="flex justify-end mb-2">
          <a
            href={`/program/${programId}/review`}
            className="font-pretendard text-base font-extrabold text-Neutral-grayscale-30 mr-[50px]"
          >
            더보기
          </a>
        </div>

        <div
          className={`flex ${isMobile ? 'overflow-x-auto snap-x ml-[50px]' : 'flex-row flex-wrap justify-center'} gap-[16px] scrollbar-hide`}
          style={isMobile ? { scrollSnapType: 'x mandatory', scrollPadding: '0 50px' } : {}}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 ${isMobile ? 'snap-start w-[290px] flex-shrink-0' : 'w-[360px] sm:w-[30%] flex-shrink-0'}`}
            >
              <div className="flex items-center gap-[4px] mb-[16px]">
                {/* 별점 개수만큼 Star 렌더링 */}
                {[...Array(review.grade)].map((_, i) => (
                  <Star key={`star-${i}`} className="w-[28px] h-[28px] sm:w-[33px] sm:h-[33px]" />
                ))}
                {/* 빈 별 채우기 */}
                {[...Array(5 - review.grade)].map((_, i) => (
                  <EmptyStar
                    key={`empty-star-${i}`}
                    className="w-[28px] h-[28px] sm:w-[33px] sm:h-[33px]"
                  />
                ))}
              </div>

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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
