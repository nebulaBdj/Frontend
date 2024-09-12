import React, { useEffect, useState } from 'react';
import ReviewBox from '../../components/Review/ReviewBox';
import { BackBtn } from '../../assets/svg';
import SortReview from '../../components/Review/SortReview';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Review } from '../../types/ProgramDetailType';
import { ReviewsSchema } from '../../types/DetailSchema'

const ReviewPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [sortedReviews, setSortedReviews] = useState<Review[]>([]);
  const { programId } = useParams<{ programId: string }>();
  const [isMoblie, setIsMoblie] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://letmec.p-e.kr/program/${programId}/review`);
        const fetchedReviews = response.data.result.reviews;

        // Zod로 데이터 검증
        const parsedData = ReviewsSchema.safeParse(fetchedReviews);

        if (!parsedData.success) {
          console.error('검증 실패', parsedData.error);
          setReviews([]);
          setSortedReviews([]);
          return;
        }
        setReviews(parsedData.data);
        setSortedReviews(parsedData.data);
      } catch (error) {
        console.error('리뷰 가져오기 실패', error);
        setReviews([]);
        setSortedReviews([]);
      }
    };
    fetchReviews();

    const handleResize = () => {
      setIsMoblie(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [programId]);

  const handleSortChange = (sortedData: Review[]) => {
    if (JSON.stringify(sortedData) !== JSON.stringify(sortedReviews)) {
      setSortedReviews(sortedData);
    }
  };

  const handleBackClick = () => {
    navigate(`/program/${programId}`);
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
