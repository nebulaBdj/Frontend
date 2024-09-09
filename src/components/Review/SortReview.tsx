import React, { useEffect, useState } from 'react';
import { Review } from '../../pages/ReviewPage/ReviewPage';

interface SortReviewProps {
  reviews: Review[];
  onSortChange: (sortedData: Review[]) => void;
}

const SortReview: React.FC<SortReviewProps> = ({ reviews, onSortChange }) => {
  const [sortType, setSortType] = useState<'latest' | 'highRating' | 'lowRating'>('latest');

  useEffect(() => {
    const sortReviews = () => {
      let sorted = [...reviews];
      switch (sortType) {
        case 'latest':
          sorted = sorted.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          break;
        case 'highRating':
          sorted = sorted.sort((a, b) => b.grade - a.grade);
          break;
        case 'lowRating':
          sorted = sorted.sort((a, b) => a.grade - b.grade);
          break;
        default:
          break;
      }
      onSortChange(sorted); // 정렬된 데이터를 상위 컴포넌트로 전달
    };

    sortReviews();
  }, [sortType, reviews, onSortChange]);

  return (
    <div className="w-full flex justify-end mb-4">
      <select
        onChange={(e) => setSortType(e.target.value as 'latest' | 'highRating' | 'lowRating')}
        className=" focus:outline-none bg-Neutral-grayscale-90 rounded-lg p-2 mt-[71px] text-[16px]
        w-[110px] px-[8px] py-[8px] mr-[15px] sm:mr-[40px] text-Neutral-grayscale-30"
      >
        <option value="latest" className="text-Neutral-grayscale-30 bg-Neutral-grayscale-80">
          최신순
        </option>
        <option value="highRating" className="text-Neutral-grayscale-30 bg-Neutral-grayscale-80">
          별점 높은순
        </option>
        <option value="lowRating" className="text-Neutral-grayscale-30 bg-Neutral-grayscale-80">
          별점 낮은순
        </option>
      </select>
    </div>
  );
};

export default SortReview;
