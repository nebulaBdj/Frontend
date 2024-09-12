import React, { useEffect, useState } from 'react';
import { Review } from '../../types/ProgramDetailType';

interface SortReviewProps {
  reviews: Review[];
  onSortChange: (sortedData: Review[]) => void;
}

const SORT_OPTIONS = {
  LATEST: 'latest',
  HIGH_RATING: 'highRating',
  LOW_RATING: 'lowRating',
} as const;

type SortOption = (typeof SORT_OPTIONS)[keyof typeof SORT_OPTIONS];

const SortReview: React.FC<SortReviewProps> = ({ reviews, onSortChange }) => {
  const [sortType, setSortType] = useState<SortOption>(SORT_OPTIONS.HIGH_RATING);

  useEffect(() => {
    const sortReviews = (reviews: Review[], sortType: SortOption) => {
      return [...reviews].sort((a, b) => {
        switch (sortType) {
          case SORT_OPTIONS.LATEST:
            return new Date(b.date).getTime() - new Date(a.date).getTime();
          case SORT_OPTIONS.HIGH_RATING:
            return b.grade - a.grade;
          case SORT_OPTIONS.LOW_RATING:
            return a.grade - b.grade;
          default:
            return 0;
        }
      });
    };

    onSortChange(sortReviews(reviews, sortType));
  }, [sortType, reviews, onSortChange]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // select 요소 변경 시 호출
    setSortType(event.target.value as SortOption);
  };

  return (
    <div className="w-full flex justify-end mb-4">
      <select
        onChange={handleSortChange}
        value={sortType}
        className="focus:outline-none bg-Neutral-grayscale-90 rounded-lg p-2 mt-[71px] text-[16px] w-[150px] px-[8px] py-[8px] mr-[15px] sm:mr-[40px] text-Neutral-grayscale-30"
      >
        <option
          value={SORT_OPTIONS.LATEST}
          className="text-Neutral-grayscale-30 bg-Neutral-grayscale-80"
        >
          최신순
        </option>
        <option
          value={SORT_OPTIONS.HIGH_RATING}
          className="text-Neutral-grayscale-30 bg-Neutral-grayscale-80"
        >
          별점 높은순
        </option>
        <option
          value={SORT_OPTIONS.LOW_RATING}
          className="text-Neutral-grayscale-30 bg-Neutral-grayscale-80"
        >
          별점 낮은순
        </option>
      </select>
    </div>
  );
};

export default SortReview;
