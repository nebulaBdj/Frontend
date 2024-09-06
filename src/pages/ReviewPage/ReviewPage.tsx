import React, { useEffect, useState } from 'react';
import ReviewBox from '../../components/Review/ReviewBox';
import { BackBtn } from '../../assets/svg';
import SortReview from '../../components/Review/SortReview';
// import LiveThumbnail from "../../assets/images/LiveThumbnail.png"
import { dummyData_review } from '../../assets/dummy/ReviewPageDummy';

export interface Review {
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
}

const ReviewPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [sortedReviews, setSortedReviews] = useState<Review[]>([]);

  const [isMoblie, setIsMoblie] = useState<boolean>(false);

  useEffect(() => {
    const fetchReviews = async () => {
      setReviews(dummyData_review);
      setSortedReviews(dummyData_review);
    };

    fetchReviews();

    const handleRize = () => {
      setIsMoblie(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleRize);
    handleRize();

    return () => window.removeEventListener('resize', handleRize);
  }, []);

  const handleSortChange = (sortedData: Review[]) => {
    setSortedReviews(sortedData);
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="bg-Neutral-grayscale-90 pb-[160px] font-pretendard">
      <div className="justify-center min-h-screen flex flex-col items-center relative ">
        <img
          src={isMoblie ? '/svg/detail_mobile_thumbnail.svg' : '/svg/detail_desktop_thumbnail.svg'}
          alt="LiveThumbnail"
          className="flex w-full h-[410px] mt-[60px] mb-[80px] bg-Neutral-grayscale-75"
        />
        <header className="relative flex flex-col items-center justify-center w-full text-center w-[258px] h-[66px]">
          <p className="h-[26px] mb-[8px] text-Primary-100 text-[18px] font-medium">강좌 후기</p>
          <div className="relative flex items-center justify-between w-[258px]">
            <p className="w-full h-[32px] text-Neutral-grayscale-0 text-[24px] font-bold whitespace-nowrap">
              실제 수강생들의 솔직한 후기
            </p>
            <button
              className="absolute left-[-50px] sm:left-[-80px] h-[42px] w-[42px] mt-[5px] sm:h-[52px] sm:w-[52px]"
              onClick={handleBackClick}
            >
              <BackBtn />
            </button>
          </div>
        </header>
        <SortReview reviews={reviews} onSortChange={handleSortChange} />
        <main>
          <main>
            <section className="flex flex-wrap justify-center items-center mt-[50px]">
              {sortedReviews.map((review) => (
                <ReviewBox key={review.id} review={review} />
              ))}
            </section>
          </main>
        </main>
      </div>
    </div>
  );
};

export default ReviewPage;
